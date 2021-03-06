import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './src/Telas/LayoutBase'
import Imagem from './src/components/Image'

function CustomDrawerContent(props, navigation) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center'}}>
        <Image source={require('./src/img/icon_vetor.png')}
          style={{ width: 100, height: 100 }}>
        </Image>
      </View>

      <View style={styles.container}>

        <View >
          <DrawerItem icon={() => <Imagem link={require("./src/img/triangulo.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Triangulo')} />
        </View>

        <View>
          <DrawerItem icon={() => <Imagem link={require("./src/img/trianguloVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('TrianguloVazado')} />
        </View>

        <View style={{ paddingTop: 20 }}>
          <DrawerItem icon={() => <Imagem link={require("./src/img/circulo.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Circulo')} />
        </View>

        <View style={{ paddingTop: 20 }}>
          <DrawerItem icon={() => <Imagem link={require("./src/img/circuloVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('CirculoVazado')} />
        </View>

        <View style={{ paddingTop: 20 }}>
          <DrawerItem icon={() => <Imagem link={require("./src/img/quadrado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Quadrado')} />
        </View>

        <View style={{ paddingTop: 20 }}>
          <DrawerItem icon={() => <Imagem link={require("./src/img/quadradoVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('QuadradoVazado')} />
        </View>

        <View style={{ paddingTop: 20 }}>
          <DrawerItem icon={() => <Imagem link={require("./src/img/trapezio.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Trapezio')} />
        </View>

        <View style={{ paddingTop: 20 }}>
          <DrawerItem icon={() => <Imagem link={require("./src/img/trapezioVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('TrapezioVazado')} />
        </View>

        <View style={{ paddingTop: 20 }}>
          <DrawerItem icon={() => <Imagem link={require("./src/img/losangulo.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('hexagono2')} />
        </View>

        <View style={{ paddingTop: 20 }}>
          <DrawerItem icon={() => <Imagem link={require("./src/img/losanguloVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('hexagonoVazado2')} />
        </View>


      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: '#D8CBE1',
        width: 300,
      }}>
      <Drawer.Screen name="Triangulo" component={Home} initialParams={{ number: 1 }} />
      <Drawer.Screen name="TrianguloVazado" component={Home} initialParams={{ number: 1 }} />
      <Drawer.Screen name="Circulo" component={Home} initialParams={{ number: 3 }} />
      <Drawer.Screen name="CirculoVazado" component={Home} initialParams={{ number: 3 }} />
      <Drawer.Screen name="Quadrado" component={Home} initialParams={{ number: 2 }} />
      <Drawer.Screen name="QuadradoVazado" component={Home} initialParams={{ number: 2 }} />
      <Drawer.Screen name="Trapezio" component={Home} initialParams={{ number: 4 }} />
      <Drawer.Screen name="TrapezioVazado" component={Home} initialParams={{ number: 4 }} />
      <Drawer.Screen name="hexagono2" component={Home} initialParams={{ number: 5 }} />
      <Drawer.Screen name="hexagonoVazado2" component={Home} initialParams={{ number: 5 }} />

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: 200,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    alignSelf: 'center',
    justifyContent: 'space-around'
  },
  quadrados: {
    backgroundColor: '#C3ABD2',
    width: 72,
    height: 70,
    borderColor: '#652291',
    borderWidth: 2,
    borderRadius: 20,
  },
})

