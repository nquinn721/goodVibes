import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import SvgUri from 'react-native-svg-uri';



class Filters extends React.Component {

  render() {
    const filters = ['Sativa', 'Indica', 'Hybrid', 'Most Recent'];

    return (
      <ScrollView horizontal={true}>
      <View style={[styles.filters, {paddingLeft: 20, paddingVertical: 15}]}>
        <View style={[styles.filters, {paddingRight: 24, borderRightWidth: 1, borderRightColor: '#e0e0e0', marginRight: 21}]}>
          <Image source={require('goodVibes/assets/images/Filters.png')} style={{width: 13, height: 13, tintColor: Layout.primaryColor}} />
          <Text style={{color: Layout.primaryColor, fontSize: 14, marginLeft: 6, fontFamily: 'sfpromedium'}}>Filters</Text>
        </View>
        {
          filters.map((v, i) => 
            <Text key={i} style={styles.filterItem}>{v}</Text>
          )
        }
        </View>
      </ScrollView>
    );
  }

 
}

const styles = StyleSheet.create({
  filters: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white'
  },
  filterItem: {
    color: Layout.lightText,
    fontSize: 14,
    marginRight: 28
  }
});



export default connect(
  // ({products, dispensaries}) => ({products, dispensaries})
)(Filters);