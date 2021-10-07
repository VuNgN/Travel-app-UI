import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LikeScreen from '../screens/LikeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';

Ionicons.loadFont();

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: colors.orange,
        tabBarStyle:{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 50,
        }
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <Ionicons name="ios-home-sharp" color={focused ? colors.orange : colors.gray} size={32} />,
        }}
      />
      <Tab.Screen
        name="Like"
        component={LikeScreen}
        options={{
          tabBarIcon: ({focused}) => <Ionicons name="ios-heart-sharp" color={focused ? colors.orange : colors.gray} size={32} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => <Ionicons name="ios-person" color={focused ? colors.orange : colors.gray} size={32} />,
        }}
      />
    </Tab.Navigator>
  );
}

