import React from 'react';
import {Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import Image from 'react-native-image-progress';
import AddToCartButton from './AddToCartButton';
import LogExperienceButton from './LogExperienceButton';

/*

<HorizontalScrollCards title={title} data={data} onPress={onPressMethod} />

*/

export default class HorizontalScrollCards extends React.Component {
  render(){
    const { log, addToCart, empty, onPress, data } = this.props;
    return (
      <View style={styles.section}>
          <Text style={styles.title}>{this.props.title}</Text>
          {this.props.data ? 
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} alwaysBounceHorizontal={true} snapToInterval={30}>
                {
                  data.map((obj, i) => {
                    return (
                      <View key={i}>
                        <TouchableOpacity style={styles.card}onPress={this.props.onPress.bind(this.props, obj)}>
                          <Image style={styles.cardImage} source={{uri: obj.img || obj.image_url}}/>
                          <View style={{padding: 5}}>
                            <View style={{height: 35}}>
                              <Text style={{color: '#666666', fontSize: 14, flexWrap: 'wrap'}}>{obj.name}</Text>
                            </View>
                            <View style={styles.content}>
                              <StarRating rating={obj.rating}/>
                              <Text style={{color: Layout.lightText}}>{obj.distance}</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                        { addToCart && <AddToCartButton product={obj} /> }
                        { log && <LogExperienceButton product={obj} /> }
                      </View>
                    );
                  })
                  
                }
            </ScrollView>
            :

            <View style={Layout.emptyCard}>
              <Text style={{color: Layout.darkGrey}}>{empty}</Text>
            </View>
          }
        </View>
    )
  }
}
  

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 160,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginRight: 10,
    ...Layout.cardShadow,
    margin: 5,
    backgroundColor: 'white'
  },
  content: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: Layout.purple
  },
  cardImage: {
    width: '100%',
    height: '60%'
  },
  section: {
    marginBottom: 10
  }
  
});