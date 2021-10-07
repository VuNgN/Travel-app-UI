import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stacks';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}

export default Navigation;
