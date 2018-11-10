import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import Card from 'goodVibes/components/card';
import { Icon } from 'react-native-elements';
import DoubleListCards from 'goodVibes/components/doubleListCards';
import Layout from 'goodVibes/constants/Layout';

class Dispensaries extends React.Component {
  static navigationOptions = {
    title: ""
  };

  render() {
    const { navigation } = this.props,
          { img, image_url, name, distance, rating, review_count } = navigation.getParam('dispensary', {}),
          products = this.props.products.filterByDispensary(name);
    return (
      <ScrollView style={styles.container}>
        <View style={{height: 200}}>
          <Image style={{height: 250}} source={{uri: img || image_url}} />
        </View>
        <View style={{padding: 15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
          <View>
            <Image style={{height: 100, width: 100, borderRadius: 10, borderColor: 'black', borderWidth: 1}} source={{uri : img || image_url}} />
            <Text style={{fontWeight: '900', color: Layout.purple}}>{name}</Text>
            <Text style={{color: Layout.lightText}}>{distance} mi</Text>
            <Text style={{color: Layout.gold}}>{rating} stars ({review_count})</Text>
          </View>
          <View>
            <Icon name="info-circle" type="font-awesome" size={35} color={Layout.purple}/>
          </View>
        </View>

        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
          <View></View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Menu</Text>
          </View>
          <View>
            <Icon name="filter-list" size={25} />
          </View>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <Text style={{color: Layout.purple}}>Flower</Text>
        </View>
        <DoubleListCards data={products} onPress={(product) => this.props.navigation.navigate('Product', {product})}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default connect(
  ({products}) => ({products})
)(Dispensaries);
