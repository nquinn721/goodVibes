import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import AddToCartButton from 'goodVibes/components/AddToCartButton';
/*

<DoubleListCards title={title} data={data} onPress={onPressMethod} />

*/
export default class DoubleListCards extends React.Component {
  render(){
    const { addToCart } = this.props;

    return (
      <View>
          <Text style={styles.title}>{this.props.title}</Text>
            <View style={styles.doubleList}>
              {
                this.props.data.map((card, i) => {
                  return (
                    <View style={[styles.card, (i % 2 === 0 && styles.margin)]} key={i}>
                      <TouchableOpacity onPress={this.props.onPress.bind(this.props.data, card)}>
                        <View style={styles.image}>
                          <Image style={{width: '100%', height: '100%'}} source={{uri: card.img || card.image_url}}/>
                        </View>
                        <View style={styles.content}>
                          <View style={{height: 50}}>
                            <Text style={{color: '#666666'}}>{card.name}</Text>
                            <Text style={{color: Layout.lightText}}>{card.type}</Text>
                          </View>
                          <View style={styles.row}>
                            <Text style={{color: Layout.red, fontSize: 12, fontWeight: '800'}}>{(card.discount && card.discount.percent + '% off') || ''}</Text>
                            <Text style={{color: Layout.lightText, fontSize: 12}}>{(card.discount && '$' + card.discount.originalPrice) || ''}</Text>
                          </View>
                          <View style={styles.row}>
                            <StarRating rating={card.rating} />
                            <Text>${card.cost}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      { addToCart && <AddToCartButton product={card}/>}
                    </View>
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
  content: {
    padding: 10
  },
  title: {
    padding: 10, 
    fontSize: 16, 
    color: Layout.purple
  },
  image: {
    height: 150,
    padding: 30
  },
  card: {
    flexBasis: '49%',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    ...Layout.cardShadow,
  },
  margin: {
    marginRight: '2%'
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  }  
});