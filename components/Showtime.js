import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';

import moment from 'moment'

class Showtime extends Component {
  render() {
    const {item, index} = this.props;

    const showtime = moment(`${item.showtimes[index].startsAtDate} ${item.showtimes[index].startsAtTime}`).calendar();

    return (
      <Text>{`${showtime} on ${item.showtimes[index].channel}`}</Text>
    );
  }
}

export default Showtime;
