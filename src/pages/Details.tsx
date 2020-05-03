import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Details({ navigation } : { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Page Details!</Text>
      <View style={styles.box} />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Main" onPress={() => navigation.navigate('Main')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
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