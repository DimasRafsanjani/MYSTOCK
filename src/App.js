import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './pages/Home';
import LoadingScreen from './pages/LoadingScreen';
import AuthScene from './pages/AuthScene';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScene}
          options={{
            title: 'Masuk ke MyStock',
            headerTitleStyle: {fontFamily: 'Montserrat-SemiBold', fontSize: 18},
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
