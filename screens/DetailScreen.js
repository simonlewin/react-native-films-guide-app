import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

import Detail from '../components/Detail'

class DetailScreen extends Component {

  render() {
    const item = this.props.navigation.getParam('item');
    return <Detail item={item} />;
  }
}

DetailScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('title'),
  headerRight: (
    <TouchableOpacity 
      style={styles.btn}
      onPress={() => WebBrowser.openBrowserAsync(navigation.getParam('imdbUrl'))}  
      >
      <MaterialIcons name="open-in-new" size={30} color="white" />
    </TouchableOpacity>
  ),
})

const styles = StyleSheet.create({
  btn: {
    margin: 5,
  },
});

export default DetailScreen;
