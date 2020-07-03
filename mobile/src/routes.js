import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconDot from './components/IconDot';

import Perfil from './pages/Perfil';
import Checklist from './pages/Checklist';
// import Categoria from './pages/Categoria';

import Lista from './pages/Cronograma/Lista';
import Detalhes from './pages/Cronograma/Detalhes';
import Criar from './pages/Cronograma/Criar';

import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function CronStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Criar" component={Criar} />
    </Stack.Navigator>
  );
}

function ListStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Checklist" component={Checklist} />
    </Stack.Navigator>
  );
}

function PerfilStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

const ListaStack = createStackNavigator();

function ListaStackScreen() {
  return (
    <ListaStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ListaStack.Screen name="Lista" component={Lista} />
    </ListaStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar hidden barStyle="light-content" backgroundColor="#7159c1" />
      <Tab.Navigator
        tabBarIcon="history"
        tabBarOptions={{
          activeTintColor: '#6d5dcf',
          inactiveTintColor: '#c0c3c4',
          showLabel: false,
          style: {
            borderTopColor: 'transparent',
            elevation: 0,
            backgroundColor: 'none',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={PerfilStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <IconDot
                isActive={focused}
                name="home"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ListaStackScreen} // change to Categoria
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <IconDot
                isActive={focused}
                name="tag"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lista"
          component={CronStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <IconDot
                isActive={focused}
                name="clock"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <IconDot
                isActive={focused}
                name="list"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
