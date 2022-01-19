import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Auth from './src/screens/auth/Auth';
import Signup from './src/screens/auth/SignUp';
import Selector from './src/screens/admin_selector/Selector';
import Warehouse from './src/screens/Warehouse/Warehouse';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function WarehouseHandler() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Warehouse-Dashboard" component={Warehouse} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Selector" component={Selector} />
        <Stack.Screen name="Warehouse" component={WarehouseHandler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
