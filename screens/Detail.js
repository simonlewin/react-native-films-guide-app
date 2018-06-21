import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import moment from 'moment'

class DetailScreen extends Component {

  render() {
    const {year, synopsis, tmdbImageId, tmdbRating, showtimes} = this.props.navigation.getParam('item');

    const image = `https://image.tmdb.org/t/p/original/${tmdbImageId}.jpg`

    if (tmdbRating >= 60) {
      ratingColor = {color: '#265819'}
    } else if (tmdbRating >= 40){
      ratingColor = {color: '#71500f'}
    } else {
      ratingColor = {color: '#7e2310'}
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            {tmdbImageId !== null ? <Image style={styles.image} source={{uri: image}} /> : null}
          </View>
          <View style={styles.info}>
            {year !== null ? <Text style={[styles.text, styles.year]}>{`Released in ${year}`}</Text> : null}
            {tmdbRating > 0 ? <Text style={styles.text}>Rating: </Text> : null}
            {tmdbRating > 0 ? <Text style={[styles.text, ratingColor]}>{`${tmdbRating}%`}</Text> : (null)}
          </View>
          <View style={styles.showtimesContainer}>
            <Text style={styles.text}>Showtimes:</Text>
            { showtimes.map(
              (times, idx) => {
                // const showtime = moment(`${times.startsAtDate} ${times.startsAtTime}`).calendar('2017-03-12 16:00');
                const showtime = moment(`2017-03-13 16:00`).calendar('2017-03-12 16:00');
                return (
                  <Text style={styles.paragraph} key={idx} numberOfLines={1}>{showtime} on {times.channel}</Text>
                ); 
              }
            )}
          </View>
          {synopsis !== null ? <Text style={styles.paragraph}>{synopsis}</Text> : null}
        </ScrollView>
      </View>        
    )
  }
}

DetailScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('title'),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    width: '80%',
    aspectRatio: 2/3,
    marginVertical: 5
  },
  info: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
  year: {
    flex: 1,
  },
  showtimesContainer: {
    paddingBottom: 5,
    marginVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor:'grey',
  },
  paragraph: {
    fontSize: 14,    
  }
});

export default DetailScreen;
