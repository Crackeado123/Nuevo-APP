import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Image, SafeAreaView, AsyncStorage, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons, Zocial } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';


import Registro from './Registro';
import User from "./img/user.jpg";
import Home from './Home';
import Producto from './Producto';
import { Login } from './Login';
import Productos from './Productos';
import FAQItem from './PreguntasF';
import Contacto from './Contacto'
import Quienes from './QuienesSomos';
import Politicas from './Politicas';
import Bienvenida from './Bienvenida';
import Acercade from './Acercade';
import Dispositivos from './Dispositivos';
import ProductosCatalogo from './productosCatalogo';
import MetodoRecuperacion from './recupContra';
import RecupCorreo from './recupCorreo';
import RecupPregunta from './recupPregunta';
import RecToken from './recToken';


const Stack = createNativeStackNavigator();
const TabsH = createBottomTabNavigator();
const StackP = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const route = useRoute();
  const userEmail = route.params?.userEmail || 'Correo electrónico no disponible';
  const [nombreUsuario, setNombreUsuario] = useState('');
  useEffect(() => {
    const obtenerNombreUsuario = async () => {
      try {
        const respuesta = await fetch('https://servidortropicalworld-1.onrender.com/usuarios/correo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ correo: userEmail }),
        });

        const data = await respuesta.json();
        if (respuesta.ok) {
          setNombreUsuario(data.nombre);
        } else {
          console.error('Error al obtener el nombre de usuario:', data.message);
          setNombreUsuario('Nombre de usuario no disponible');
        }
      } catch (error) {
        console.error('Error al obtener el nombre de usuario:', error);
        setNombreUsuario('Nombre de usuario no disponible');
      }
    };

    if (userEmail) {
      obtenerNombreUsuario();
    }
  }, [userEmail]);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#c6ffa0',
          height: 200,
        }}
        >
        <View
          style={{
            height: 200,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        >
          <Image
            source={User}
            style={{
              height: 100,
              width: 100,
              borderRadius: 65,
              marginTop: 30
            }}
          />

          <Text
            style={{
              fontSize: 22,
              marginVertical: 6,
              fontWeight: 'bold',
              color: '#111',
            }}
          >
            {nombreUsuario}
          </Text>
        </View>

        <DrawerItemList {...props} />
      </View>
    </SafeAreaView>
  );
};

export const NavHome = () => {
  return (
    //En esta parte es muy importante por que aqui es donde puedo cambiar el header solo le pondria los mismos estilos y listo
    <Stack.Navigator>
      <Stack.Screen name='Bienvenida' component={Bienvenida} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Registro' component={Registro} options={{ headerShown: false }} />
      <Stack.Screen name='Recuperaciones' component={MetodoRecuperacion} options={{ headerShown: false }} />
      <StackP.Screen name='PorCorreo' component={RecupCorreo} options={{ headerShown: false }} />
      <StackP.Screen name='PorPregunta' component={RecupPregunta} options={{ headerShown: false }} />
      <StackP.Screen name='RecToken' component={RecToken} options={{ headerShown: false }} />

      <Stack.Screen name='Home' component={MiDrawer} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

export const StackProductos = () => {
  return (
    <StackP.Navigator>
      <StackP.Screen name='Productos2' component={ProductosCatalogo} options={{ headerShown: false }} />
      <StackP.Screen
        name='Producto'
        component={Producto}

      />
    </StackP.Navigator>
  );
};

//Estos son los menús de abajo
export const NavTabsHome = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Home '}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />
      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Dispositivos  '
        component={Dispositivos}
        options={{
          headerShown: false,
          tabBarIcon: () => <Zocial name='android' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsQuienes = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Quienes Somos'}
        component={Quienes}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Dispositivos  '
        component={Dispositivos}
        options={{
          headerShown: false,
          tabBarIcon: () => <Zocial name='android' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsPoliticas = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Políticas '}
        component={Politicas}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Dispositivos  '
        component={Dispositivos}
        options={{
          headerShown: false,
          tabBarIcon: () => <Zocial name='android' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};


export const NavTabsProductos = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Productos '}
        component={Productos}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Dispositivos  '
        component={Dispositivos}
        options={{
          headerShown: false,
          tabBarIcon: () => <Zocial name='android' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsPreguntas = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Preguntas Frecuentes '}
        component={FAQItem}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Dispositivos  '
        component={Dispositivos}
        options={{
          headerShown: false,
          tabBarIcon: () => <Zocial name='android' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsContacto = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Contacto '}
        component={Contacto}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Dispositivos  '
        component={Dispositivos}
        options={{
          headerShown: false,
          tabBarIcon: () => <Zocial name='android' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsAcercade = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Acerca De'}
        component={Acercade}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Dispositivos  '
        component={Dispositivos}
        options={{
          headerShown: false,
          tabBarIcon: () => <Zocial name='android' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

//Estos son los menus de la izquierda
export const MiDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#c6ffa0',// c6ffafe0 fondo con transparencia
        },
        headerTitleStyle: {
          color: '#004883fe',
        },
        drawerLabelStyle: {
          color: '#004883fe',
        },
      }}
    >

      <Drawer.Screen
        name='Principal'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome5 name='home' color={'black'} size={29} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
        }}
        component={NavTabsHome}
      />

      <Drawer.Screen
        name='Quienes somos'
        options={({ navigation }) => ({
          title: 'Quienes somos',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <MaterialCommunityIcons name='account-group' color={'#3c75d4'} size={30} />,
        })}
        component={NavTabsQuienes}
      />

      <Drawer.Screen
        name='Politicas'
        options={({ navigation }) => ({
          title: 'Políticas',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome5 name='scroll' color={'#5a4019'} size={25} />,
        })}
        component={NavTabsPoliticas}
      />

      <Drawer.Screen
        name='Productoss'
        options={({ navigation }) => ({
          title: 'Productos  ',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <MaterialCommunityIcons name='clipboard-list' color={'black'} size={30} />,
        })}
        component={NavTabsProductos}
      />

      <Drawer.Screen
        name='Ayuda'
        options={({ navigation }) => ({
          title: 'Ayuda',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <MaterialCommunityIcons name='help-network' color={'#0066ff'} size={30} />

        })}
        component={NavTabsHome}
      />

      <Drawer.Screen
        name='Preguntas frecuentes'
        options={({ navigation }) => ({
          title: 'Preguntas Frecuentes',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <MaterialCommunityIcons name='account-question' color={'#7a007a'} size={30} />
        })}
        component={NavTabsPreguntas}
      />

      <Drawer.Screen
        name='Contacto'
        options={({ navigation }) => ({
          title: 'Contacto',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome5 name='phone-alt' color={'#ff6f00'} size={30} />
        })}
        component={NavTabsContacto}
      />

      <Drawer.Screen
        name='Acerca'
        options={({ navigation }) => ({
          title: 'Acerca de',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome5 name='info-circle' color={'#ff0000'} size={30} />,
        })}
        component={NavTabsAcercade}
      />

      <Drawer.Screen
        name='Cerrar sesion'
        options={{
          headerShown: false,
          drawerIcon: () => <FontAwesome5 name='sign-in-alt' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={Bienvenida}
      />
    </Drawer.Navigator>
  );
};
