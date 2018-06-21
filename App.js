import { createStackNavigator } from 'react-navigation';

import { StatusBar } from 'react-native';

import ListScreen from './screens/List';
import DetailScreen from './screens/Detail';

StatusBar.setBarStyle('light-content');

const RootNavigator = createStackNavigator({
  Home: ListScreen,
  Detail: DetailScreen,
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#68aa63'
    },
    headerTintColor: '#fff'
  }
});

export default RootNavigator;
