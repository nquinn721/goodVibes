import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Card from './card';

export default class DoubleListCards extends React.Component {
  render(){
    return (
      <View>
          <Text>{this.props.title}</Text>
            <View style={styles.doubleList}>
              {
                this.props.data.map((u, i) => {
                  return (
                    <Card key={i} style={styles.card} data={u} onPress={this.props.onPress}/>
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
  
});