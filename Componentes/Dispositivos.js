import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Modal, ScrollView, Alert } from 'react-native';
import { Quienesstyles } from './Estilos';
import { dispositivosStyles } from './Estilos';
import SelectDropdown from 'react-native-select-dropdown';
import { styles0 } from './Estilos';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dispositivos = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [dispositivos, setDispositivos] = useState([]);

  const [ledEncendido, setLedEncendido] = useState(false);
  const [valancinEncendido, setValancinEncendido] = useState(false);
  const [carruselEncendido, setCarruselEncendido] = useState(false);
  const [musicaEncendido, setMusicaEncendido] = useState(false);
  const [temperatura, setTemperatura] = useState(0);
  const [humedad, setHumedad] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [deviceName, setDeviceName] = useState('');
  const [deviceLabel, setDeviceLabel] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('');

  const ledUrl = `https://servidortropicalworld-1.onrender.com/dispositivos/cambiarEstadoLed`;
  const valancinUrl = 'https://servidortropicalworld-1.onrender.com/dispositivos/cambiarEstadoValancin';
  const carruselUrl = 'https://servidortropicalworld-1.onrender.com/dispositivos/cambiarEstadoCarrucel';
  const musicaUrl = 'https://servidortropicalworld-1.onrender.com/dispositivos/cambiarEstadoMusica';
  const crearDispositivoUrl = 'https://servidortropicalworld-1.onrender.com/dispositivos/crearDispositivoUrl/';

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const email = await AsyncStorage.getItem('userEmail');
        if (email !== null) {
          setUserEmail(email);
          const response = await fetch(`https://servidortropicalworld-1.onrender.com/usuarios/buscaUsuarioByCorreo/${email}`);
          const data = await response.json();
          if (data.usuarioId) {
            setUserId(data.usuarioId);
          } else {
            console.log(data.msg);
          }
        }
      } catch (error) {
        console.error('Error retrieving user email:', error);
      }
    };

    fetchUserEmail();
  }, []);

  const fetchDispositivos = async () => {
    try {
      const response = await fetch(`https://servidortropicalworld-1.onrender.com/dispositivos/encontrarDispositivosPorUsuarioId/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setDispositivos(data);
      } else {
        throw new Error('Error al obtener los dispositivos del usuario');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo obtener los dispositivos del usuario');
    }
  };

  useEffect(() => {
    if (userId) {
      fetchDispositivos();
    }
  }, [userId]);

  const enviarLed = async () => {
    try {
      if (selectedDevice) {
        const response = await fetch(ledUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ led: ledEncendido ? 0 : 1, deviceName: selectedDevice })
        });
        if (response.ok) {
          setLedEncendido(!ledEncendido);
        } else {
          throw new Error('Error al cambiar el estado del LED');
        }
      }

    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo cambiar el estado del LED');
    }
  };

  const enviarValancin = async () => {
    try {
      if (selectedDevice) {
        const response = await fetch(valancinUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ valancin: !valancinEncendido ? 1 : 0, deviceName: selectedDevice })
        });
        if (response.ok) {
          setValancinEncendido(!valancinEncendido);
        } else {
          throw new Error('Error al cambiar el estado del valancín');
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo cambiar el estado del valancín');
    }
  };

  const enviarCarrusel = async () => {
    try {
      if (selectedDevice) {
        const response = await fetch(carruselUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ carrucel: !carruselEncendido ? 1 : 0, deviceName: selectedDevice })
        });
        if (response.ok) {
          setCarruselEncendido(!carruselEncendido);
        } else {
          throw new Error('Error al cambiar el estado del carrusel');
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo cambiar el estado del carrusel');
    }
  };

  const enviarMusica = async () => {
    try {
      if (selectedDevice) {
        const response = await fetch(musicaUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ musica: !musicaEncendido ? 1 : 0, deviceName: selectedDevice })
        });
        if (response.ok) {
          setMusicaEncendido(!musicaEncendido);
        } else {
          throw new Error('Error al cambiar el estado de la música');
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo cambiar el estado de la música');
    }
  };

  const obtenerTemperatura = async () => {
    try {
      if (selectedDevice) {
        const response = await fetch(`https://servidortropicalworld-1.onrender.com/dispositivos/obtenerEstadoTemperaturaHumedad/${selectedDevice}`);
        if (response.ok) {
          const data = await response.json();
          const temperaturaNumerica = parseFloat(data.temperatura);
          setTemperatura(temperaturaNumerica);
          setHumedad(data.humedad);
        } else {
          throw new Error('Error al obtener la temperatura');
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo obtener la temperatura');
    }
  };

  useEffect(() => {
    obtenerTemperatura();
  }, [selectedDevice]);

  const crearNuevoDispositivo = async () => {
    try {
      const response = await fetch(crearDispositivoUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          deviceName: deviceName,
          deviceLabel: deviceLabel,
          userId: userId
        })
      });
      if (response.ok) {

        closeModal();
      } else {
        throw new Error('Error al crear el dispositivo');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo crear el dispositivo');
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require('./img/lol.jpg')}
      style={Quienesstyles.backgroundImage}
    >
      <ScrollView>
        <View style={dispositivosStyles.abajoMenu}>
          <Text style={dispositivosStyles.text3}>Mis dispositivos</Text>
          <SelectDropdown
            data={dispositivos.map(device => device.deviceName)}
            defaultButtonText={'Selecciona tu dispositivo'}
            onSelect={(selectedItem, index) => setSelectedDevice(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            rowTextForSelection={(item, index) => item}
            renderDropdownIcon={isOpened => (
              <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />
            )}
            dropdownIconPosition={'left'}
            buttonStyle={styles0.buttonStyle}
            buttonTextStyle={styles0.buttonTextStyle}
            dropdownStyle={styles0.dropdownStyle}
            rowStyle={styles0.rowStyle}
            rowTextStyle={styles0.rowTextStyle}
          />
        </View>
        <View style={dispositivosStyles.container}>
          <View style={dispositivosStyles.buttonsContainer}>
            <TouchableOpacity
              style={[dispositivosStyles.button, ledEncendido ? dispositivosStyles.encendidoButton : dispositivosStyles.apagadoButton]}
              onPress={enviarLed}
            >
              <View style={[dispositivosStyles.imageContainer, ledEncendido ? dispositivosStyles.encendidoImageContainer : dispositivosStyles.apagadoImageContainer]}>
                <ImageBackground
                  source={require('./img/bombilla-de-idea.png')}
                  style={dispositivosStyles.image}
                />
              </View>
              <Text style={dispositivosStyles.buttonText}>
                {ledEncendido ? 'Encendido' : 'Apagado'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[dispositivosStyles.button, valancinEncendido ? dispositivosStyles.encendidoButton : dispositivosStyles.apagadoButton]}
              onPress={enviarValancin}
            >
              <View style={[dispositivosStyles.imageContainer, valancinEncendido ? dispositivosStyles.encendidoImageContainer : dispositivosStyles.apagadoImageContainer]}>
                <ImageBackground
                  source={require('./img/cuna-de-bebe.png')}
                  style={dispositivosStyles.image}
                />
              </View>
              <Text style={dispositivosStyles.buttonText}>
                {valancinEncendido ? 'Encendido' : 'Apagado'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={dispositivosStyles.buttonsContainer}>
            <TouchableOpacity
              style={[dispositivosStyles.button, carruselEncendido ? dispositivosStyles.encendidoButton : dispositivosStyles.apagadoButton]}
              onPress={enviarCarrusel}
            >
              <View style={[dispositivosStyles.imageContainer, carruselEncendido ? dispositivosStyles.encendidoImageContainer : dispositivosStyles.apagadoImageContainer]}>
                <ImageBackground
                  source={require('./img/movil-cuna.png')}
                  style={dispositivosStyles.image}
                />
              </View>
              <Text style={dispositivosStyles.buttonText}>
                {carruselEncendido ? 'Encendido' : 'Apagado'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[dispositivosStyles.button, musicaEncendido ? dispositivosStyles.encendidoButton : dispositivosStyles.apagadoButton]}
              onPress={enviarMusica}
            >
              <View style={[dispositivosStyles.imageContainer, musicaEncendido ? dispositivosStyles.encendidoImageContainer : dispositivosStyles.apagadoImageContainer]}>
                <ImageBackground
                  source={require('./img/Venti.png')}
                  style={dispositivosStyles.image}
                />
              </View>
              <Text style={dispositivosStyles.buttonText}>
                {musicaEncendido ? 'Encendido' : 'Apagado'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={dispositivosStyles.buttonsContainer}>
            <Text style={dispositivosStyles.text2}>Temperatura: {'\n'}{`${temperatura}°`}</Text>
            <View style={dispositivosStyles.termometro}>
              <View style={[dispositivosStyles.termometroFill, { height: `${temperatura}%` }]} />
              <View style={dispositivosStyles.termometroTop} />
              <View style={dispositivosStyles.termometroBulbo} />
            </View>
            <View style={dispositivosStyles.gauge}>
              <View style={[dispositivosStyles.fill, { height: `${humedad}%` }]} />
              <Text style={dispositivosStyles.text}>Humedad:</Text>
              <Text style={dispositivosStyles.text}>{`${humedad}%`}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={dispositivosStyles.addButton} onPress={openModal}>
          <FontAwesome name="plus" size={20} color="white" />
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={dispositivosStyles.modalContainer}>
            <View style={dispositivosStyles.modalContent}>
              <Text style={dispositivosStyles.modalTitle}>Add New Device</Text>
              <Text style={dispositivosStyles.label}>Device name:</Text>
              <TextInput
                style={dispositivosStyles.input}
                value={deviceName}
                onChangeText={text => setDeviceName(text)}
              />
              <Text style={dispositivosStyles.label}>Device label:</Text>
              <TextInput
                style={dispositivosStyles.input}
                value={deviceLabel}
                onChangeText={text => setDeviceLabel(text)}
              />
              <TouchableOpacity style={dispositivosStyles.closeButton} onPress={crearNuevoDispositivo}>
                <Text style={dispositivosStyles.closeButtonText}>Create a Device</Text>
              </TouchableOpacity>

              <TouchableOpacity style={dispositivosStyles.closeButton} onPress={closeModal}>
                <Text style={dispositivosStyles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};
//Para que pueda escribir el simbolo de los grados es alt+0176 °

export default Dispositivos;