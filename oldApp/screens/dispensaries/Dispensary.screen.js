import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import DoubleListCards from 'goodVibes/components/DoubleListCards';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import RoundedButton from 'goodVibes/components/RoundedButton';
import BackButton from 'goodVibes/components/BackButton';
import DispensaryFilteredImage from 'goodVibes/components/DispensaryFilteredImage';

class Dispensaries extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props,
          dispensary = navigation.getParam('dispensary', {}),
          { img, image_url, name, distance, rating, review_count } = dispensary,
          products = this.props.products.filterByDispensary(name);
          
    return (
      <ScrollView style={Layout.container}>
        <BackButton navigation={this.props.navigation} />
        <View style={{backgroundColor: 'white', ...Layout.cardShadow}}>
          <DispensaryFilteredImage dispensary={dispensary} style={{height: 120}}/>

          
          <View style={{padding: 15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
            <View>
              <Image style={{height: 100, width: 100, borderRadius: 10, ...Layout.cardShadow}} source={{uri : img || image_url}} />
              <Text style={{color: Layout.darkGrey, fontSize: 20}}>{name}</Text>
              <Text style={{color: Layout.lightText}}>{distance}</Text>
              <StarRating rating={rating} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 15, right: 20}}>
              <Text style={{color: Layout.purple}}>show details </Text>
              <Icon name="info-circle" type="font-awesome" size={15} color={Layout.purple}/>
            </View>
          </View>
        </View>


        <View style={{justifyContent: 'space-around', flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
          <RoundedButton text="Full Menu" icon="book-open" type="feather"/>
          <RoundedButton text="Filters" icon="filter-list"/>
        </View>

        <Text style={{color: Layout.purple, paddingLeft: 20}}>Flowers</Text>
        <DoubleListCards data={products} onPress={(product) => this.props.navigation.navigate('Product', {product})} addToCart/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});

export default connect(
  ({products}) => ({products})
)(Dispensaries);
