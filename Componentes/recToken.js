import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles0 } from './Estilos';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecToken = () => {
    const nav = useNavigation();

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
                    <Text style={styles0.title}>Obtén la verificación en tu correo</Text>

                    <Text style={styles0.description}>Para fines de seguridad necesitarás ingresar el código que hemos enviado a tu correo a continuación</Text>

                    <Text style={styles0.label}>Token</Text>

                    <TextInput
                        style={styles0.inputContainer}
                        placeholder='Ingresa tu token'
                    />
                    <TouchableOpacity
                        style={styles0.Button2}
                        onPress={()=>nav.navigate('ActualizarContra')}
                    >
                        <Text style={styles0.textoBoton2}>Verificar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ImageBackground>
    );
}

export default RecToken;
