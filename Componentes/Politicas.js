import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
import { Politicasstyles } from './Estilos';

const Politicas = () => {
  const [politicas, setPolitica] = useState([]);
  const [seleccionarPolitica, setseleccionarPolitica] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchPoliticas();
  }, []);

  const fetchPoliticas = async () => {
    try {
      const response = await fetch('https://servidortropicalworld-1.onrender.com/privado/obtenerPoliticas/');
      const datos = await response.json();
      setPolitica(datos);
    } catch (error) {
      console.error('Error fetching politicas:', error);
    }
  };

  const presionarPolitica = (indice) => {
    setseleccionarPolitica(indice);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setseleccionarPolitica(null);
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={Politicasstyles.backgroundImage}
    >
      <View style={Politicasstyles.container}>
        <Text style={Politicasstyles.title}>Políticas de la Aplicación</Text>

        {politicas.map((policy, indice) => (
          <TouchableOpacity
            key={indice}
            style={Politicasstyles.policyContainer}
            onPress={() => presionarPolitica(indice)}>
            <Text style={Politicasstyles.policyText}>{policy.titulo}</Text>
          </TouchableOpacity>
        ))}

        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={cerrarModal}>
          <ScrollView contentContainerStyle={Politicasstyles.scrollView}>
            <View style={Politicasstyles.modalView}>
              <Text style={Politicasstyles.modalTittle}>
                {seleccionarPolitica !== null ? politicas[seleccionarPolitica].titulo : ''}
              </Text>
              <Text style={Politicasstyles.modalText}>
                {seleccionarPolitica !== null ? politicas[seleccionarPolitica].contenido : ''}
              </Text>
              <Pressable
                style={[Politicasstyles.button, Politicasstyles.buttonClose]}
                onPress={cerrarModal}>
                <Text style={Politicasstyles.buttonText}>Cerrar</Text>
              </Pressable>
            </View>
          </ScrollView>
        </Modal>
      </View>
    </ImageBackground>

  );
};

export default Politicas;
