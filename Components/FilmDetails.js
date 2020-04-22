import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { getFilmDetailFromApi } from "../API/TMDBApi";

export class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    // this.setState({ isLoading: false });
    getFilmDetailFromApi(this.props.route.params.idFilm).then((data) => {
      this.setState({
        film: data,
        isLoading: false,
      });
    });
  }

  _displayFilm() {
    const film = this.state.film;
    console.log("_displayFilm", film);
    if (film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Text>Titre du film: {film.title}</Text>
        </ScrollView>
      );
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayFilm()}
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview_container: {
    flex: 1,
  },
});

export default FilmDetails;
