import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Details({ route, navigation } : { route: any, navigation: any }) {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>Page Details!</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});