import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './Tabs';
import TravelStack from '../screens/TravelScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={
        {
            headerShown: false,
        }
    }>
      <Stack.Screen name="HomeStack" component={MyTabs} />
      <Stack.Screen name="TravelStack" component={TravelStack} />
    </Stack.Navigator>
  );
}
