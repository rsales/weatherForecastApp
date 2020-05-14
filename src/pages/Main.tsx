import React, { Component } from 'react';
import { WEATHER_KEY } from 'react-native-dotenv'
import { UNSPLASH_KEY } from 'react-native-dotenv'

import apiUnsplash from '../services/apiUnsplash';
import apiWeather from '../services/apiWeather';

import axios from 'axios';

import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends Component {
  state = {
    cityWeather: [],
    cityImages: [],
  };

  componentDidMount() {
    this.searchCityImage();
  };

  searchCityWeather = async () => {
    const response = await apiWeather.get('/forecast.json', {
      params: {
        key: WEATHER_KEY,
        q: 'Curitiba',
        days: 7,
      }
    })
    const docs = response.data;
    console.log(docs);
  }

  searchCityImage = async () => {
    const response = await apiUnsplash.get('/photos', {
      params: {
        query: 'Curitiba',
        orientation: 'landscape',
        client_id: UNSPLASH_KEY,
      }
    })
    const cityImages = response.data.results;
    this.setState({ cityImages })
    console.log(cityImages);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Page Main!</Text>
        {this.state.cityImages.map(image => (
          <Text key={image.id}>{image.id}</Text>
        ))}
        <View style={styles.box} />
        {/* <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
              name: 'Curitiba'
            });
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginTop: 10,
    backgroundColor: "#F00"
  }
});
