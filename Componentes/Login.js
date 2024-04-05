import React, { useState } from 'react';
import { styles0 } from './Estilos';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = () => {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, mostrarContraseña] = useState(false);

  const alternarMostrarConraseña = () => {
    mostrarContraseña(!showPassword);
  };

  //estas son las validaciones 
  const manejoLogin = async () => {
    if (!email.trim() && !password.trim()) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }


    if (!email.trim() && password.trim()) {
      Alert.alert('Error', 'Por favor, ingresa tu correo electrónico');
      return;
    }

    if (email.trim() && !password.trim()) {
      Alert.alert('Error', 'Por favor, ingresa tu contraseña');
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido');
      return;
    }

    //aqui se definen la constante datos para tomar los datos de labase 
    try {
      const datos = {
        correo: email,
        password: password,
        
      };
      

      const respuesta = await fetch('https://servidortropicalworld-1.onrender.com/usuarios/singIn/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });

      const resultado = await respuesta.json();
      
      if (respuesta.ok) {
        await AsyncStorage.setItem('userEmail', email); // Almacenar el correo electrónico en AsyncStorage

        nav.navigate('Home', { userEmail: email });

      } else {
        Alert.alert('Error', resultado.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Correo o contraseña incorrectas');
    }
    //setEmail('');
    //setPassword('');
  };

  //Aqui se validan los arii
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={styles0.backgroundImage}
    >
      <View style={styles0.container}>
        <View style={styles0.container2}>

          <Text style={styles0.title}>Iniciar sesión</Text>
          <Animatable.Image
            source={require('./img/LogoTW.jpeg')}
            style={styles0.logo}
          />
          <Text style={styles0.label}>Correo electrónico</Text>
          <TextInput
            style={styles0.inputContainer}
            placeholder='Ingresa tu correo electrónico'
            autoCompleteType='email'
            keyboardType='email-address'
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles0.label}>Contraseña</Text>
          <TextInput
            style={styles0.inputContainer}
            placeholder='Ingresa tu contraseña'
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
            maxLength={8}

          />
          <TouchableOpacity onPress={alternarMostrarConraseña} style={styles0.eyeIcon}>
            <Animatable.View animation="bounceIn">
              <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color='black' />
            </Animatable.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={manejoLogin} style={styles0.Button2}>
            <Text style={styles0.textoBoton2}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles0.link} onPress={() => nav.navigate('Recuperaciones')}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text onPress={() => nav.navigate('Registro')} style={styles0.link}>Registrarse</Text>
          </TouchableOpacity>

      
          <Text>{'\n'}</Text>

        </View>
      </View>
    </ImageBackground>
  );
};
