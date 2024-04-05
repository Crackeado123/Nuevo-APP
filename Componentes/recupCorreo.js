import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles0 } from './Estilos';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecupCorreo = () => {
    const nav = useNavigation();
    const [correo, setCorreo] = useState('');

    const buscarUsuario = async () => {
        try {
            const response = await fetch('https://servidortropicalworld-1.onrender.com/usuarios/correo/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo }),
            });

            if (response.ok) {
                const userData = await response.json();
                nav.navigate('RecToken')
            }
        } catch (error) {
            console.error('Error al buscar usuario:', error);
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
                    <Text style={styles0.title}>Recuperar contraseña por correo</Text>

                    <Text style={styles0.description}>Ingresa tu correo y sigue las instrucciones para resetear tu contraseña</Text>

                    <Text style={styles0.label}>Correo electrónico</Text>

                    <TextInput
                        style={styles0.inputContainer}
                        placeholder='Ingresa tu correo'
                        onChangeText={setCorreo}
                        value={correo}
                    />
                    <TouchableOpacity
                        style={styles0.Button2}
                        onPress={buscarUsuario}
                    >
                        <Text style={styles0.textoBoton2}>Continuar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ImageBackground>
    );
}

export default RecupCorreo;
