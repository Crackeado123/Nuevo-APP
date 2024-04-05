import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground,Alert } from 'react-native';
import { styles0 } from './Estilos';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';

const RecupPregunta = () => {
    const nav = useNavigation();
    const [selectedPregunta, setSelectedPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');

    const interrogantes = [
        '¿nombre de tu mejor amigo?',
        '¿color favorito?',
        '¿equipo de futbol?',
    ];
    const handleContinuar = async () => {
        try {
            // Realizar la solicitud al servidor para buscar al usuario por pregunta y respuesta
            const response = await fetch('https://servidortropicalworld-1.onrender.com/usuarios/respuesta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pregunta: selectedPregunta, respuesta }),
            });

            if (response.ok) {
                nav.navigate('ActualizarContra');
            }else{
                Alert.alert('Error','el usuario no')
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
                    <Text style={styles0.title}>Recuperar contraseña por Pregunta secreta</Text>

                    <Text style={styles0.description}>Actualiza tu contraseña con base a las preguntas secretas</Text>

                    <Text style={styles0.label}>Selecciona una pregunta</Text>
                    <SelectDropdown
                        data={interrogantes}
                        defaultButtonText={'Preguntas secretas'}
                        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
                        rowTextForSelection={(item, index) => item}
                        renderDropdownIcon={isOpened => (
                            <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />
                        )}
                        dropdownIconPosition={'left'}
                        buttonStyle={styles0.buttonStyle}
                        buttonTextStyle={styles0.buttonTextStyle}
                        dropdownStyle={styles0.dropdownStyle}
                        rowStyle={styles0.rowStyle}
                        rowTextStyle={styles0.rowTextStyle}
                        onSelect={(selectedItem, index) => setSelectedPregunta(selectedItem)}
                    />
                    <Text style={styles0.label}>Ingresa tu respuesta</Text>

                    <TextInput
                        style={styles0.inputContainer}
                        placeholder='Ingresa tu respuesta'
                        onChangeText={setRespuesta}
                        value={respuesta}
                    />
                    <TouchableOpacity
                        style={styles0.Button2}
                        onPress={handleContinuar}
                    >
                        <Text style={styles0.textoBoton2}>Continuar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ImageBackground>
    );
}

export default RecupPregunta;
