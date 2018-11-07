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
                    <TouchableOpacity key={i} onPress={this.props.onPress ? this.props.onPress.bind(this.props, u) : (() => {})}>
                      <Card style={styles.card} name={u.name} distance={u.distance} totalRatings={u.totalRatings} img={u.img} stars={u.stars}/>
                    </TouchableOpacity>
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
  
});