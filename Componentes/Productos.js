import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Pressable, TextInput, Button, Modal, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Quienesstyles, tablaProductosStyles } from './Estilos';

const Productos = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', categoria: '', precio: '' });
    const [productoEditado, setProductoEditado] = useState(null);
    const [modalVisibleAgregar, setModalVisibleAgregar] = useState(false);
    const [modalVisibleEditar, setModalVisibleEditar] = useState(false);
    const nav = useNavigation();

    useEffect(() => {
        obtenerProductos();
    }, []);
    //metodo get
    const obtenerProductos = async () => {
        try {
            const response = await fetch('https://servidortropicalworld-1.onrender.com/productos');
            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }
            const data = await response.json();
            setData(data);
            setLoad(true);
        } catch (error) {
            console.error(error);
            setLoad(true);
        }
    };
    //metodo put
    const agregarProducto = async () => {
        try {
            const response = await fetch('https://servidortropicalworld-1.onrender.com/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoProducto),
            });
            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }
            setNuevoProducto({ nombre: '', categoria: '', precio: '' });
            obtenerProductos();
        } catch (error) {
            console.error(error);
        }
    };
    //metodo delete
    const eliminarProducto = async (id) => {
        try {
            const response = await fetch(`https://servidortropicalworld-1.onrender.com/productos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el producto');
            }
            obtenerProductos();
        } catch (error) {
            console.error(error);
        }
    };
    //metodo put
    const editarProducto = async () => {
        try {
            const response = await fetch(`https://servidortropicalworld-1.onrender.com/productos/${productoEditado._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productoEditado),
            });
            if (!response.ok) {
                throw new Error('Error al editar el producto');
            }
            obtenerProductos();
        } catch (error) {
            console.error(error);
        }
    };

    const abrirModalAgregar = () => {
        setModalVisibleAgregar(true);
    };

    const abrirModalEditar = (producto) => {
        setProductoEditado(producto);
        setModalVisibleEditar(true);
    };

    const cerrarModalAgregar = () => {
        setModalVisibleAgregar(false);
    };

    const cerrarModalEditar = () => {
        setModalVisibleEditar(false);
    };

    const Uscreen = () => {
        return (
            <View>
                <ActivityIndicator color={'darkblue'} />
                <Text>Cargando Datos...</Text>
            </View>
        );
    };

    const Card = ({ nombre, categoria, precio, _id }) => {
        return (
            <Pressable onPress={() => abrirModal({ nombre, categoria, precio, _id })}>
                <Text>Producto: {nombre}</Text>
                <Text>Categoría: {categoria}</Text>
                <Text>Precio: ${precio} MXN</Text>
            </Pressable>
        );
    };

    //Tabla de productos
    const LScreen = () => {
        return (
            <View>
                <View style={tablaProductosStyles.tableHeader}>
                    <Text style={tablaProductosStyles.columnHeader}>Nombre</Text>
                    <Text style={tablaProductosStyles.columnHeader}>Categoría</Text>
                    <Text style={tablaProductosStyles.columnHeader}>Precio</Text>
                    <Text style={tablaProductosStyles.columnHeader}>Acciones</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={tablaProductosStyles.tableRow}>
                            <Text style={tablaProductosStyles.tableCell}>{item.nombre}</Text>
                            <Text style={tablaProductosStyles.tableCell}>{item.categoria}</Text>
                            <Text style={tablaProductosStyles.tableCell}>${item.precio} MXN</Text>
                            <View style={tablaProductosStyles.actionCell}>
                                <FontAwesome name="edit" size={24} color="blue" onPress={() => abrirModalEditar(item)} />
                                <FontAwesome name="trash" size={24} color="red" onPress={() => eliminarProducto(item._id)} />
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item._id}
                />
            </View>
        );
    };

    return (
        <ImageBackground
            source={require('./img/UnFondo.jpg')}
            style={Quienesstyles.backgroundImage}
        >
            <View>
                <View style={tablaProductosStyles.container}>
                    <Pressable style={tablaProductosStyles.button} onPress={abrirModalAgregar}>
                        <Text style={tablaProductosStyles.buttonText}>Agregar Producto</Text>
                        <FontAwesome name="plus" size={24} color="black" style={tablaProductosStyles.icon} />
                    </Pressable>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisibleAgregar}
                        onRequestClose={cerrarModalAgregar}
                    >
                        <View style={tablaProductosStyles.modalContainer}>
                            <View style={tablaProductosStyles.modalContent}>
                                <TextInput
                                    style={tablaProductosStyles.input}
                                    placeholder="Nombre"
                                    value={nuevoProducto.nombre}
                                    onChangeText={(text) => setNuevoProducto({ ...nuevoProducto, nombre: text })}
                                />
                                <TextInput
                                    style={tablaProductosStyles.input}
                                    placeholder="Categoría"
                                    value={nuevoProducto.categoria}
                                    onChangeText={(text) => setNuevoProducto({ ...nuevoProducto, categoria: text })}
                                />
                                <TextInput
                                    style={tablaProductosStyles.input}
                                    placeholder="Precio"
                                    value={nuevoProducto.precio}
                                    onChangeText={(text) => setNuevoProducto({ ...nuevoProducto, precio: text })}
                                />
                                <View style={tablaProductosStyles.buttonContainer}>
                                    <Button title="Agregar" onPress={agregarProducto} />
                                    <Button title="Cancelar" onPress={cerrarModalAgregar} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleEditar}
                    onRequestClose={cerrarModalEditar}
                >
                    <View style={tablaProductosStyles.modalContainer}>
                        <View style={tablaProductosStyles.modalContent}>
                            <TextInput
                                style={tablaProductosStyles.input}
                                placeholder="Nombre"
                                value={productoEditado?.nombre}
                                onChangeText={(text) => setProductoEditado({ ...productoEditado, nombre: text })}
                            />
                            <TextInput
                                style={tablaProductosStyles.input}
                                placeholder="Categoría"
                                value={productoEditado?.categoria}
                                onChangeText={(text) => setProductoEditado({ ...productoEditado, categoria: text })}
                            />
                            <TextInput
                                style={tablaProductosStyles.input}
                                placeholder="Precio"
                                value={productoEditado?.precio}
                                onChangeText={(text) => setProductoEditado({ ...productoEditado, precio: text })}
                            />
                            <Button title="Guardar" onPress={editarProducto} />
                            <Button title="Cancelar" onPress={cerrarModalEditar} />
                        </View>
                    </View>
                </Modal>
                {load ? <LScreen /> : <Uscreen />}
            </View>
        </ImageBackground>
    );
};

export default Productos;
