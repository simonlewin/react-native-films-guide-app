import React, { Component } from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import ListItem from './ListItem';
import ListSeparator from './ListSeparator';

class List extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  keyExtractor(item) {
    return `${item.id}`;
  };

  renderItem({ item }) {
    const navigate = () => {
      this.props.navigateToDetail(item);
    };
    return <ListItem item={item} onPress={navigate} />;
  }

  renderSeparator() {
    return <ListSeparator />
  }

  render() {
    const { items } = this.props;
    return (
      items && items.length > 0 ? (
        <FlatList
          style={styles.container} 
          data={items} 
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor} 
          ItemSeparatorComponent={this.renderSeparator} 
        />
      ) : (
        <ActivityIndicator 
          style={styles.activity}
          size='large' 
          color='#68aa63' 
        />
      )
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  activity: {
    flex: 1,
    justifyContent: 'center'    
  }
})

export default List;
