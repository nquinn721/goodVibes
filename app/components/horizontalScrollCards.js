import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Card from './card';

/*

<HorizontalScrollCards title={title} data={data} onPress={onPressMethod} />

*/

export default class HorizontalScrollCards extends React.Component {
  render(){
    const style = {
      ...styles.card,
      ...this.props.style
    }
    return (
      <View style={styles.section}>
          <Text>{this.props.title}</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} alwaysBounceHorizontal={true} snapToInterval={30}>
              {
                this.props.data.map((u, i) => {
                  return (
                      <Card key={i} style={style} data={u} onPress={this.props.onPress} dontAddToCart={this.props.dontAddToCart}/>
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