import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { Quienesstyles, styles0 } from './Estilos';
import Swiper from 'react-native-swiper';

const Home = () => {
  const data = [
    {
      id: 1,
      image: require('./img/LogoTW.jpeg')
    },
    {
      id: 2,
      image: require('./img/user.jpg')
    },
    {
      id: 3,
      image: require('./img/nn.png')
    },
    {
      id: 4,
      image: require('./img/user.jpg')
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        swiperRef.current.scrollBy(1);
      } else {
        swiperRef.current.scrollBy(-currentIndex);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderPagination = () => {
    return (
      <View style={styles0.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              Quienesstyles.paginationDot,
              currentIndex === index && Quienesstyles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <ImageBackground source={require('./img/UnFondo.jpg')} style={Quienesstyles.backgroundImage}>
      <ScrollView>
        <View style={styles0.container4}>
          <Text style={styles0.title}>Tropical World</Text>
          <Text style={Quienesstyles.title}>Proyecto: Cuna Inteligente</Text>
          <Swiper
            ref={swiperRef}
            loop={false}
            autoplay={false}
            showsPagination={false}
            onIndexChanged={(index) => setCurrentIndex(index)}
          >
            {data.map((item, index) => (
              <View key={index}>
                <Image source={item.image} style={Quienesstyles.itemImage} />
              </View>
            ))}
          </Swiper>
          {renderPagination()}

          <View style={styles0.container5}>
            <Text style={Quienesstyles.title}>¿De qué trata?</Text>
            <Text style={Quienesstyles.description}>
              El proyecto de la cuna inteligente tiene como objetivo proporcionar una solución innovadora para el cuidado de los bebés. La cuna está equipada con sensores IoT que monitorean constantemente la temperatura, humedad y movimientos en la habitación del bebé. Además, la cuna puede integrarse con dispositivos móviles para proporcionar alertas en tiempo real a los padres sobre el estado y bienestar del bebé.
              {'\n'}
            </Text>
            <Text style={Quienesstyles.title}>Componentes Utilizados:</Text>
            <Text style={Quienesstyles.description}>
              - Protoboard {'\n'}
              - ESP32 {'\n'}
              - Servomotor {'\n'}
              - Motor a pasos {'\n'}
              - Luces leds {'\n'}
              - Cables {'\n'}
              - Cables USB tipo V8 {'\n'}

            </Text>
            <Text style={Quienesstyles.title}>Lenguajes utilizados:</Text>
            <Text style={Quienesstyles.description}>
              - React Native: JavaScript {'\n'}
              - Arduino: C++ {'\n'}
              - Backend: Node JS {'\n'}
              - Frontend: Angular de JavaScript {'\n'}
            </Text>
          </View>

        </View>
        <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>


      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
