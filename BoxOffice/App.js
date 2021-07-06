import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import BoxOfficeNavigator from './navigators/BoxOfficeNavigator';


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
        <BoxOfficeNavigator/>
      </NavigationContainer>
    </>
  );
};

export default App;