import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { StatusBar } from 'react-native';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import initial from './data/initial';
import reducer from './data/reducer';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';

StatusBar.setBarStyle('light-content');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk)),
);

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

class Nav extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <ActivityIndicator size="large" color="#68aa63" /> */}
        <RootNavigator />
      </Provider>
    )
  }
}

export default Nav;
