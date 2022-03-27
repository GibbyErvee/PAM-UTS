

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigasi from './navigation/navigation';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Navigasi />
  );
};
export default App;