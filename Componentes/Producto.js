import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, ImageBackground } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles0 } from './Estilos';
import { ProductoCardStyles } from './Estilos';

const Producto = ({ route }) => {
  const { id } = route.params;
  const [dato, setDato] = useState(null);
  const [load, setLoad] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [corazonSeleccionado, setCorazonSeleccionado] = useState(false);

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    try {
      const response = await fetch(`https://servidortropicalworld-1.onrender.com/productos/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener el producto');
      }
      const data = await response.json();
      setDato(data);
      setLoad(true);
      setLoadingData(false);
    } catch (error) {
      console.error(error);
      Alert.alert('error al obtener el product');
    }
  };

  const toggleCorazonSeleccionado = () => {
    setCorazonSeleccionado(!corazonSeleccionado);
  };

  const screenL = () => {
    return (


      <ScrollView contentContainerStyle={ProductoCardStyles.scrollView}>
        <Card style={ProductoCardStyles.card}>
          <View style={ProductoCardStyles.imageContainer}>
            <Card.Cover source={{ uri: dato.imagen }} style={ProductoCardStyles.image} />
          </View>
          <Card.Content>
            <Title>{dato.nombre}</Title>
            <Paragraph>Precio: ${dato.precio} MXN</Paragraph>
            <Paragraph>Descripción: {dato.descripcion}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <FontAwesome
              name={corazonSeleccionado ? 'heart' : 'heart-o'}
              size={30}
              color={corazonSeleccionado ? 'red' : 'black'}
              onPress={toggleCorazonSeleccionado}
              style={{ marginRight: 15 }}
            />
          </Card.Actions>
        </Card>
      </ScrollView>
    );
  };

  const screenU = () => {
    return (

      <View style={ProductoCardStyles.loadingContainer}>
        <View style={ProductoCardStyles.animationContainer}>
          <LottieView
            source={require('./Animations/Ani1.json')}
            autoPlay
            loop
            style={ProductoCardStyles.animation}
          />
        </View>
        <Text>Cargando Datos...</Text>
        <ActivityIndicator />
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={styles0.backgroundImage}
    >
      <View>{loadingData ? screenU() : screenL()}</View>
    </ImageBackground>
  );
};

export default Producto;
