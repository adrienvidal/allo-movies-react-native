import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class FilmItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <View style={styles.main_container}>
        <Text style={styles.title_text}> {item.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
  },
  title_text: {
    fontSize: 15,
  },
});

export default FilmItem;
