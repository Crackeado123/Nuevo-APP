import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles0 } from './Estilos';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const MetodoRecuperacion = () => {
  const nav = useNavigation();

  const [seleccionado, setIsSelected] = useState(false);
  const [seleccionado2, setIsSelected2] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!seleccionado);
    if (seleccionado2) {
      setIsSelected2(false);
    }
  };

  const toggleSelection2 = () => {
    setIsSelected2(!seleccionado2);
    if (seleccionado) {
      setIsSelected(false);
    }
  };

  const irARecupSeleccionada = () => {
    if (seleccionado) {
      nav.navigate('PorCorreo');
    } else if (seleccionado2) {
      nav.navigate('PorPregunta');
    } else {
      Alert.alert('Selecciona una opción', 'Por favor, selecciona un método de recuperación.');
    }
  };


  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={styles0.backgroundImage}
    >

      <View style={styles0.container}>

        <View style={styles0.container2}>
          <View style={styles0.vista}>
            <TouchableOpacity onPress={() => nav.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} />
            </TouchableOpacity>
          </View>
          <Text style={styles0.title}>Recuperación {'\n'}de contraseña</Text>

          <Animatable.Image
            source={require('./img/LogoTW.jpeg')}
            style={styles0.logo}
          />
          <Text style={styles0.label}>Métodos de recuperación</Text>

          <TouchableOpacity
            style={styles0.selectionIconContainer}
            onPress={toggleSelection}
          >
            <View style={seleccionado ? styles0.containerrec : styles0.containerrecUnselected}>
              <FontAwesome name='envelope' size={20} />
              <Text>Restablecer {'\n'}por correo</Text>
              <FontAwesome
                name={seleccionado ? 'check-square' : 'square-o'}
                size={20}
                color='green'
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles0.selectionIconContainer}
            onPress={toggleSelection2}
          >
            <View style={seleccionado2 ? styles0.containerrec : styles0.containerrecUnselected}>
              <MaterialCommunityIcons name='head-question' size={26} />
              <Text>Restablecer por {'\n'}pregunta secreta</Text>
              <FontAwesome
                name={seleccionado2 ? 'check-square' : 'square-o'}
                size={20}
                color='green'
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles0.Button2}
            onPress={irARecupSeleccionada}
          >
            <Text style={styles0.textoBoton2}>Siguiente</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
};

export default MetodoRecuperacion;
