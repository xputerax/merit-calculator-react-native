import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import UniAwamScreen from './screens/UniAwamScreen';
import PoliEtcScreen from './screens/PoliEtcScreen';
import AliranSainsScreen from './screens/AliranSainsScreen';
import AliranSasteraScreen from './screens/AliranSasteraScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  UniAwam: {screen: UniAwamScreen},
  PoliEtc: {screen: PoliEtcScreen},
  AliranSains: {screen: AliranSainsScreen},
  AliranSastera: {screen: AliranSasteraScreen},
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}