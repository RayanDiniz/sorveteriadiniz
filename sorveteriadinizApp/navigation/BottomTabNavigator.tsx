import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Inicio';
import Cardapio from '../screens/Cardapio';
import User from '../screens/User';
import { BottomTabParamList, InicioParamList, MenuParamList, UserParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <ControlIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={Cardapio}
        options={{
          tabBarIcon: ({ color }) => <FoodIcon name="fast-food-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ color }) => <ControlIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function ControlIcon(props: { name: string; color: string }) {
  return (
    <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />
  )
};
function FoodIcon(props: { name: string; color: string }) {
  return (
    <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
  )
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Inicio = createStackNavigator<InicioParamList>();

function Home() {
  return (
    <Inicio.Navigator>
      <Inicio.Screen
        name="Inicio"
        component={Home}
        options={{ headerTitle: 'Sorveteria Diniz' }}
      />
    </Inicio.Navigator>
  );
}

const Menu = createStackNavigator<MenuParamList>();

function Cardapio() {
  return (
    <Menu.Navigator>
      <Menu.Screen
        name="Cardapio"
        component={Cardapio}
        options={{ headerTitle: 'Cardapio' }}
      />
    </Menu.Navigator>
  );
}

const User = createStackNavigator<UserParamList>();

function Usuario() {
  return (
    <User.Navigator>
      <User.Screen
        name="User"
        component={Usuario}
        options={{ headerTitle: 'Usuario' }}
      />
    </User.Navigator>
  );
}