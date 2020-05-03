import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { SOME_KEY } from 'react-native-dotenv'

export default function Main({ navigation } : { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Page Main!</Text>
      <Text>{SOME_KEY}</Text>
      <View style={styles.box} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
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
