import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import FilmList from "./FilmList";
import { getLatestFilmFromApi } from "../API/TMDBApi";

export class News extends Component {
  constructor(props) {
    super(props);
    this.page = 0;
    this.totalPages = 0;
    this.state = {
      films: [],
      isLoading: false,
    };

    this._loadFilms = this._loadFilms.bind(this);
  }

  componentDidMount() {
    this._loadFilms();
  }

  _loadFilms() {
    this.setState({ isLoading: true });
    getLatestFilmFromApi(this.page + 1).then((data) => {
      this.page = data.page;
      this.totalPages = data.total_pages;
      this.setState({
        films: [...this.state.films, ...data.results],
        isLoading: false,
      });
    });
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
    // console.log("News", this.state);
    return (
      <View style={styles.main_container}>
        <FilmList
          films={this.state.films}
          navigation={this.props.navigation}
          loadFilms={this._loadFilms}
          page={this.page}
          totalPages={this.totalPages}
          favoriteList={false} // Ici on est bien dans le cas de la liste des films favoris. Ce booléen à true permettra d'empêcher de lancer la recherche de plus de films après un scroll lorsqu'on est sur la vue Favoris.
        />
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
});

export default News;
