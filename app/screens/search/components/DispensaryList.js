import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import ProductCard from 'goodVibes/components/ProductCard';

class DispensaryList extends React.Component {

  render() {
    const { navigation, location, dispensaries } = this.props;
    
    return (
      <View>
        <View style={styles.menu}>
          <View style={styles.menuItem}>
            <Image source={require('goodVibes/assets/images/Filters.png')} style={{width: 13, height: 12, tintColor: Layout.primaryColor}}/>
            <Text style={{color: Layout.primaryColor, fontSize: 14}}> Filters</Text>
          </View>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapView', {location})}>
            <Image source={require('goodVibes/assets/images/Map.png')} style={{width: 13, height: 12, tintColor: Layout.primaryColor}}/>
            <Text style={{color: Layout.primaryColor, fontSize: 14}}> Map View</Text>
          </TouchableOpacity>
        </View>
        {
          dispensaries.map((v, i) => 
            <View key={i} style={{paddingTop: 30}}>
              <ProductCard product={v} navigation={this.props.navigation} type="dispensary"/>
            </View>
            )
        }
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 20,
    ...Layout.card
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});



export default connect(
  // ({dispensaries}) => ({dispensaries})
)(DispensaryList);

