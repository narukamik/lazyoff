/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconDot from './components/IconDot';
import Cronograma from './pages/Cronograma';
import Perfil from './pages/Perfil';
import Lista from './pages/Lista';
import Checklist from './pages/Checklist';
import Detalhes from './pages/Detalhes';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
const Stack = createStackNavigator();

function DetalhesStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Detalhes" component={Detalhes} />
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
      <Stack.Screen name="Cronograma" component={Cronograma} />
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
       options={{
          headerShown: false,
        }}
      >
      <Stack.Screen
        name="Perfil"
        component={Perfil}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}

function ListaStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Lista" component={Lista} />
    </Stack.Navigator>
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
          component={ListStackScreen}
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
