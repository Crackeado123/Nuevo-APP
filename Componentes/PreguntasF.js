import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { preguntasFstyles } from './Estilos';

const FAQItem = ({ question, answer }) => {
  const [expandido, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expandido);
  };

  return (
    <View style={preguntasFstyles.faqItem}>
      <TouchableOpacity onPress={toggleExpand} style={preguntasFstyles.header}>
        <Text style={preguntasFstyles.question}>{question}</Text>
        <FontAwesome name={expandido ? 'chevron-up' : 'chevron-down'} size={20} color='#333' />
      </TouchableOpacity>
      {expandido && <Text style={preguntasFstyles.answer}>{answer}</Text>}
    </View>
  );
};

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch('https://servidortropicalworld-1.onrender.com/privado/obtenerPreguntas/');
        const datos = await respuesta.json();
        setFaqData(datos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={preguntasFstyles.backgroundImage}
    >
      <ScrollView style={preguntasFstyles.container}>
        <Text style={preguntasFstyles.title}>Preguntas Frecuentes</Text>
        {faqData.map((item, indice) => (
          <FAQItem key={indice} question={item.titulo} answer={item.contenido} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default FAQ;
