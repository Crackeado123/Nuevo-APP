import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, Image, TextInput, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { catalogoProductos } from './Estilos';

const ProductosCatalogo = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const nav = useNavigation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        try {
            const response = await fetch('https://servidortropicalworld-1.onrender.com/productos');
            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }
            const data = await response.json();
            setData(data);
            setFilteredData(data);
            setLoad(true);
        } catch (error) {
            console.error(error);
            setLoad(true);
        }
    };

    const handleSearch = (text) => {
        setSearch(text);
        const filtered = data.filter((item) => {
            return item.nombre.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filtered);
    };

    const handleFilter = (filterType) => {
        let filtered;
        switch (filterType) {
            case 'name':
                filtered = [...filteredData].sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case 'price-low':
                filtered = [...filteredData].sort((a, b) => a.precio - b.precio);
                break;
            case 'price-high':
                filtered = [...filteredData].sort((a, b) => b.precio - a.precio);
                break;
            default:
                filtered = [...data];
        }
        setFilteredData(filtered);
        setVisible(false);
    };

    const Uscreen = () => {
        return (
            <View style={catalogoProductos.loadingContainer}>
                <LottieView
                    source={require('./Animations/Ani4.json')}
                    autoPlay
                    loop
                    style={catalogoProductos.animation}
                />
            </View>
        );
    };

    const ProductCard = ({ nombre, categoria, precio, _id, imagen }) => {
        const handlePress = () => {
            nav.navigate('Producto', { id: _id });
        };


        
        return (
            <Pressable onPress={handlePress} style={catalogoProductos.cardContainer}>
                <Image source={{ uri: imagen }} style={catalogoProductos.cardImage} />
                <View style={catalogoProductos.cardContent}>
                    <Text style={catalogoProductos.cardTitle}>Nombre: {nombre}</Text>
                    <Text style={catalogoProductos.cardCategory}>Categoría: {categoria}</Text>
                    <Text style={catalogoProductos.cardPrice}>Precio: ${precio} MXN</Text>
                </View>
            </Pressable>
        );
    };

    const renderProducto = ({ item }) => (
        <ProductCard nombre={item.nombre} categoria={item.categoria} precio={item.precio} _id={item._id} imagen={item.imagen} />
    );

    return (
        <ImageBackground source={require('./img/UnFondo.jpg')} style={catalogoProductos.backgroundImage}>
            <View style={catalogoProductos.container}>
                <View style={catalogoProductos.searchContainer}>
                    <TextInput
                        placeholder="Buscar producto..."
                        style={catalogoProductos.searchInput}
                        value={search}
                        onChangeText={handleSearch}
                    />
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <FontAwesome name="filter" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={obtenerProductos}>
                        <FontAwesome name="refresh" size={28} color="black" />
                    </TouchableOpacity>
                </View>
                {load ? (
                    <FlatList
                        data={filteredData}
                        renderItem={renderProducto}
                        keyExtractor={(item) => item._id}
                    />
                ) : (
                    <Uscreen />)}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <View style={catalogoProductos.modalContainer}>
                    <TouchableOpacity style={catalogoProductos.filterButton} onPress={() => handleFilter('name')}>
                        <Text>Ordenar por nombre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={catalogoProductos.filterButton} onPress={() => handleFilter('price-low')}>
                        <Text>Ordenar por precio (bajo a alto)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={catalogoProductos.filterButton} onPress={() => handleFilter('price-high')}>
                        <Text>Ordenar por precio (alto a bajo)</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ImageBackground>
    );
};

export default ProductosCatalogo;
