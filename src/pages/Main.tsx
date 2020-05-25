import React, { Component } from 'react';
import { WEATHER_KEY } from 'react-native-dotenv'
import { UNSPLASH_KEY } from 'react-native-dotenv'

import apiUnsplash from '../services/apiUnsplash';
import apiWeather from '../services/apiWeather';

import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default class Main extends Component {
  state = {
    cityWeather: {},
    cityImages: [],
    search: '',
    searched: false,
  };

  componentDidMount() {
  };

  handleSearch = (text: any) => {
    this.setState({ search: text })
  }

  searchCityWeather = async () => {
    const response = await apiWeather.get('/forecast.json', {
      params: {
        key: WEATHER_KEY,
        q: this.state.search,
        days: 7,
      }
    })
    const cityWeather = response.data;
    this.setState({cityWeather})
    // console.log(this.state.cityWeather);
  }

  searchCityImage = async () => {
    const response = await apiUnsplash.get('/photos', {
      params: {
        query: this.state.search,
        orientation: 'landscape',
        client_id: UNSPLASH_KEY,
      }
    })
    const cityImages = response.data.results;
    this.setState({ cityImages })
    console.log(cityImages);
  }

  searchyWeather = () => {
    this.searchCityImage();
    this.searchCityWeather();
    this.setState({ searched: true })
  }

  render() {
    let SearchArea;
    let result = [ this.state.cityWeather ];
    if (this.state.searched) {
      SearchArea = 
        <View style={styles.notSearch}>
          {/* {result.map(item => {
            <Text>{ item[0] }</Text>
          })} */}
        </View>
      ;
    } else {
      SearchArea = 
        <View style={styles.notSearch}>
          <Text style={{ fontSize: 50 }}>
            😢 
          </Text>
          <Text style={{ fontSize: 45, fontWeight: '900', color: '#E9E9E9', lineHeight: 50, }}>
            No research was done 
          </Text>
        </View>
      ;
    }

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          style={styles.inputSearch}
          onChangeText={this.handleSearch}
          value={this.state.search}
          onSubmitEditing={()=>this.searchyWeather()}
        />
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
        <Text style={ styles.titleSearch }>Last Search:</Text>
        <View style={styles.hr} />

        {SearchArea}

        {/* {this.state.cityImages.map(image => (
          <Image
            key={image.id}
            style={styles.boxImage}
            source={{
              uri: `${image.urls.small}`,
            }}
          />
        ))} */}
        {/* {this.state.cityWeather.map(weather => (
          <Text>{weather.location.name}</Text>
        ))} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    padding: 16,
  },
  hr: {
    backgroundColor: 'lightgrey',
    height: 0.5,
    width: '100%',
    marginTop: 10,
    marginBottom: 15,
  },
  titleSearch: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  notSearch: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxImage: {
    width: '70%',
    height: 60,
    marginBottom: 5,
    backgroundColor: "grey"
  },
  inputSearch: {
    paddingTop: 15, 
    paddingBottom: 15, 
    paddingLeft: 10, 
    paddingRight: 10, 
    fontSize: 16,
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
  }
});
