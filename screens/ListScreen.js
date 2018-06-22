import React, { Component } from 'react';
import { connect } from "react-redux";

import List from '../components/List'

import { getFilms } from "../data/actions/api";

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.navigateToDetail = this.navigateToDetail.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  navigateToDetail(item) {
    this.props.navigation.navigate('Detail', {
      title: item.name,
      item: item,
      imdbUrl: item.imdbUrl
    });
  }

  render() {
    const {films} = this.props;
    return <List
      items={films}
      navigateToDetail={this.navigateToDetail} />;
  }
}

ListScreen.navigationOptions = {
  title: 'Films on Freeview',
}

const mapStateToProps = (state) => ({
  films: state.films
});

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getFilms()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
