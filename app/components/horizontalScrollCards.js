import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Card from './card';

export default class HorizontalScrollCards extends React.Component {
  render(){
    return (
      <View style={styles.section}>
          <Text>{this.props.title}</Text>
          <ScrollView horizontal={true}>
              {
                this.props.data.map((u, i) => {
                  return (
                      <Card key={i} style={styles.card} data={u} onPress={this.props.onPress}/>
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
    width: 250,
    marginRight: 20
  },
  section: {
    padding: 10
  },
  
});