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
import Profile from './pages/Profile';

// import Dashboard from './pages/Dashboard';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

const CronStack = createStackNavigator();

function CronStackScreen() {
  return (
    <CronStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CronStack.Screen name="Cronograma" component={Cronograma} />
      <CronStack.Screen name="Detalhes" component={Detalhes} />
    </CronStack.Navigator>
  );
}

const ListStack = createStackNavigator();

function ListStackScreen() {
  return (
    <ListStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ListStack.Screen name="Checklist" component={Checklist} />
    </ListStack.Navigator>
  );
}

const PerfilStack = createStackNavigator();

function PerfilStackScreen() {
  return (
    <PerfilStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PerfilStack.Screen name="Perfil" component={Perfil} />
      <PerfilStack.Screen name="SignIn" component={SignIn} />
      <PerfilStack.Screen name="SignUp" component={SignUp} />
    </PerfilStack.Navigator>
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
