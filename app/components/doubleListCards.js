import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Card from './card';

export default class DoubleListCards extends React.Component {
  render(){
    return (
      <View style={styles.section}>
          <Text>{this.props.title}</Text>
            <View style={styles.doubleList}>
              {
                this.props.data.map((u, i) => {
                  return (
                      <TouchableOpacity style={styles.card} key={i} onPress={this.props.onPress ? this.props.onPress.bind(this.props, u) : (() => {})}>
                        <Card style={styles.card} name={u.name} distance={u.distance} totalRatings={u.totalRatings} img={u.img} stars={u.stars}/>
                      </TouchableOpacity>
                  );
                })
              }
            </View>
        </View>
    )
  }
}
  

const styles = StyleSheet.create({
  doubleList: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    flexBasis: '50%'
  },
  section: {
    padding: 10
  },
  
});