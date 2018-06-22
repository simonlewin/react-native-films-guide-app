import React, { Component } from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

// import moment from 'moment'

import Rating from './Rating'
import Showtime from './Showtime'

class ListItem extends Component {
  render() {
    const { item, onPress } = this.props;
    const { name, tmdbRating } = item;

    // const showtime = moment(`${item.showtimes[0].startsAtDate} ${item.showtimes[0].startsAtTime}`).calendar();

    return (
      <TouchableHighlight style={styles.container} onPress={onPress} underlayColor="#e4e4e4">
        <View style={styles.filmContainer}>
        <View style={styles.filmDetails}>
          <Text style={styles.filmName} numberOfLines={1}>
            {name}
          </Text>
          <Text 
            style={styles.showTimes} 
            numberOfLines={1}>
            <Showtime item={item} index={0}/> 
            {/* {`${showtime} on ${item.showtimes[0].channel}`} */}
          </Text>
        </View>
          {tmdbRating > 0 ? <Rating style={styles.rating} rating={tmdbRating}/> : ''}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  filmContainer: {
    flexDirection: 'row'
  },
  filmDetails: {
    flex: 1
  },
  filmName: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10
  },
  showTimes: {
    color: '#a0a0a0',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10
  },
  rating: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 10
  }
});

export default ListItem;
