import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Acercadestyles } from './Estilos';

const Acercade = () => {
  const nav = useNavigation();
  const animatedViewRef = useRef(null);

  useEffect(() => {
    startAnimation();

    const intervalId = setInterval(() => {
      startAnimation();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const startAnimation = () => {
    if (animatedViewRef.current) {
      animatedViewRef.current.bounce(800);
    }
  };

  return (
    <ScrollView contentContainerStyle={Acercadestyles.scrollContainer}>
      <View style={Acercadestyles.container}>
        <View style={Acercadestyles.centeredContent}>
        <Text style={Acercadestyles.description}>¡Tropical World para Android!</Text>

          <Animatable.Image
            ref={animatedViewRef}
            source={require('./img/LogoTW.jpeg')}
            style={Acercadestyles.logo}
          />
          <Text style={Acercadestyles.description}>10.310.4</Text>
          <Text style={Acercadestyles.description}>
            El presente canal de instrucción o ambiente, es operado por Tropical.com de 
            Mexico, S de R.L dE C.V identificada bajo la marca comercial "Tropical" Copyrigth 
            2023-2024 Tropical inc.
          </Text>
          <Text style={Acercadestyles.description}>
            Insurgentes Sur 1602 Piso 9 Suite 900, Credito Constructor Benito Juarez, 03940 Ciudad de Mexico, CDMX, Mexico
          </Text>

          <TouchableOpacity style={Acercadestyles.ctaButton}>
            <Text style={Acercadestyles.ctaText}>Calificar en Play Store</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Acercadestyles.ctaButton}>
            <Text style={Acercadestyles.ctaText}>Sugerencias</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


export default Acercade;
