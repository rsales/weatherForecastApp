import React, { Component } from 'react';
import apiUnsplash from '../services/apiUnsplash';
import apiWeather from '../services/apiWeather';

import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Page Main!</Text>
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
