import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BoxOffice from './pages/BoxOffice';
import MovieDetail from './pages/MovieDetail';


const Theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator>
          <Stack.Screen name="BoxOffice" component={BoxOffice} options={{headerShown:false}}/>
          <Stack.Screen name="MovieDetail" component={MovieDetail}/>
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;