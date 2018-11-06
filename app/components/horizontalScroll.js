import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Card } from 'react-native-elements';

export default class Discover extends React.Component {
  render(){
    return (
      <View style={styles.section}>
          <Text>{this.props.title}</Text>
          <ScrollView horizontal={true}>
              {
                this.props.data.map((u, i) => {
                  return (
                  <Card key={i} image={u.img} containerStyle={styles.card}>
                      <Text style={styles.title}>{u.name}</Text>
                      <Text style={styles.distance}>{u.distance} mi</Text>
                      <Text>{u.stars} Stars({u.totalRatings})</Text>
                  </Card>
                  );
                })
              }
          </ScrollView>
        </View>
    )
  }
}
  

const styles = StyleSheet.create({
  card: {
    width: 250
  },
  section: {
    padding: 10
  },
  image: {
    borderColor: '#aaa',
    borderWidth: 1
  },
  distance: {
    color: '#aaa'
  },
  title: {
    fontWeight: '900'
  }
});