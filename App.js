import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.coolpeoplegreen}>and now for something completly different</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002244',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coolpeoplegreen: {
    color: '#69BE28',
  }
  
});
