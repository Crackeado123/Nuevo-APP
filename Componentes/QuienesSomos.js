import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
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

  const [indiceActual, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (indiceActual < data.length - 1) {
        swiperRef.current.scrollBy(1);
      } else {
        swiperRef.current.scrollBy(-indiceActual);
      }
    }, 2500);

    return () => clearInterval(intervalo);
  }, [indiceActual]);

  const renderPagination = () => {
    return (
      <View style={styles0.paginationContainer}>
        {data.map((_, indice) => (
          <View
            key={indice}
            style={[
              Quienesstyles.paginationDot,
              indiceActual === indice && Quienesstyles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Animatable.View animation="bounceInDown" style={Quienesstyles.item}>
      <Image source={item.image} style={Quienesstyles.itemImage} />
    </Animatable.View>
  );

  return (
    <ImageBackground source={require('./img/UnFondo.jpg')} style={Quienesstyles.backgroundImage}>
      <ScrollView>
        <View style={styles0.container4}>
          <Text style={styles0.title}>Bienvenido</Text>
          <Text style={Quienesstyles.title}>Esto es Tropical World</Text>
          <Swiper
            ref={swiperRef}
            loop={false}
            autoplay={false}
            showsPagination={false}
            onIndexChanged={(indice) => setCurrentIndex(indice)}
          >
            {data.map((item, indice) => (
              <View key={indice}>
                <Image source={item.image} style={Quienesstyles.itemImage} />
              </View>
            ))}
          </Swiper>
          {renderPagination()}

          <View style={styles0.container5}>
            <Text style={Quienesstyles.title}>Conócenos</Text>
            <Text style={Quienesstyles.description}>
              Somos el Equipo 4, conformado por Nico, Gabriel, Zuñiga y Jose Flores. Nuestra misión es desarrollar una página web que emule una tienda virtual especializada en la venta de productos y accesorios para bebés. Estamos comprometidos en brindar la mejor experiencia de compra para los futuros padres y aquellos que buscan artículos de calidad para sus pequeños.
              {'\n'}
            </Text>
            <Text style={Quienesstyles.title}>Visión:</Text>
            <Text style={Quienesstyles.description}>
              "Convertirnos en líderes de la industria al ofrecer soluciones innovadoras y tecnológicas que promuevan el bienestar y la seguridad de los bebés y sus padres a través de nuestra cuna inteligente. Buscamos revolucionar la experiencia del sueño infantil, brindando tranquilidad y comodidad a las familias en todo el mundo".
              {'\n'}
            </Text>
            <Text style={Quienesstyles.title}>Misión:</Text>
            <Text style={Quienesstyles.description}>
              "Nuestra misión es desarrollar y proporcionar una cuna inteligente de vanguardia que integre tecnología avanzada para monitorear y mejorar la calidad del sueño de los bebés, al tiempo que ofrece características de seguridad y comodidad sin igual. Nos comprometemos a innovar continuamente, asegurando que nuestros productos cumplan con los más altos estándares de calidad y contribuyan positivamente al bienestar de las familias".
            </Text>
          </View>
        </View>
        <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
