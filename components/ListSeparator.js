import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: '#ddd',
    marginLeft: 10
  }
});

const ListSeparator = () => (
  <View style={styles.container} />
);

export default ListSeparator;
