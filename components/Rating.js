import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  }
});

class Rating extends Component {
  render() {
    const {rating} = this.props;

    if (rating >= 60) {
      ratingColor = {color: '#265819'}
    } else if (rating >= 40){
      ratingColor = {color: '#71500f'}
    } else {
      ratingColor = {color: '#7e2310'}
    }

    return (
      <Text style={[styles.text, ratingColor]}>{`${rating}%`}</Text>
    );
  }
}

export default Rating;
