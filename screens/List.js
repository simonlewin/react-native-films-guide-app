import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight, Image } from 'react-native';

import films from '../assets/films.json';
import moment from 'moment'

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onPress(item) {
    this.props.navigation.navigate('Detail', {
      title: item.name,
      item: item,
      imdbUrl: item.imdbUrl,
    });
  }

  renderItem({item}) {
    const { name, tmdbRating } = item;

    if (tmdbRating >= 60) {
      ratingColor = {color: '#265819'}
    } else if (tmdbRating >= 40){
      ratingColor = {color: '#71500f'}
    } else {
      ratingColor = {color: '#7e2310'}
    }

    // const showtime = moment('2017-12-05 00:30').calendar('2017-12-01 00:30');
    // const showtime = moment('2018-03-22 17:11').calendar()
    const showtime = moment(`${item.showtimes[0].startsAtDate} ${item.showtimes[0].startsAtTime}`).calendar('2017-03-12 16:00');
    // console.log(`${item.showtimes[0].startsAtDate} ${item.showtimes[0].startsAtTime}`)
    // console.log(showtime)

    return (
      <TouchableHighlight
        style={styles.btn} 
        onPress={() => this.onPress(item)}
        underlayColor='#e4e4e4'
        >
        <View style={styles.filmContainer}>
          <View style={styles.filmDetails}>
            <Text style={styles.filmName} numberOfLines={1}>
              {name}
            </Text>
            <Text style={styles.showTimes} numberOfLines={1}>
              {`${showtime} on ${item.showtimes[0].channel}`}
            </Text>
          </View>
          <Text style={[styles.rating, ratingColor]}>
            {tmdbRating > 0 ? `${tmdbRating}%`: ''}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  keyExtractor(item) {
    return `${item.id}`;
  };

  renderSeparator() {
    return <View style={styles.separator} />;
  }

  render() {
    return (
      <FlatList
        style={styles.container} 
        data={films} 
        keyExtractor={this.keyExtractor} 
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator} 
      />
    );
  };
};

ListScreen.navigationOptions = {
  title: 'Films on Freeview',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',  
  },
  filmContainer: {
    flexDirection: 'row',
  },
  filmDetails: {
    flex: 1,
  },
  filmName: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
  showTimes: {
    color: '#a0a0a0',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,  
  },
  rating: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  separator: {
    height: 1, 
    backgroundColor: '#ddd', 
    marginLeft: 10,
  }
})

export default ListScreen;
