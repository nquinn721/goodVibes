import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import SearchBar from 'goodVibes/components/SearchBar';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import RoundedButton from 'goodVibes/components/RoundedButton';
import DispensaryFilteredImage from 'goodVibes/components/DispensaryFilteredImage';

class Dispensaries extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { dispensaries } = this.props.dispensaries;

    return (
      <View style={Layout.container}>
        <SearchBar navigation={this.props.navigation}/>
        <View style={{padding: 15, justifyContent: 'space-between', flexDirection: 'row',}}>
          <RoundedButton onPress={() => this.props.navigation.navigate('DispensaryMap')} text="Map View" icon="map-o" type="font-awesome"/>
          <RoundedButton text="Filters" icon="filter-list"/>
        </View>
        <ScrollView style={styles.container}>
         {
          dispensaries.map((v, i) => {
            return (
              <TouchableOpacity key={i} style={{height: 220}} onPress={() => this.props.navigation.navigate('Dispensary', {dispensary: v})}>
                <DispensaryFilteredImage dispensary={v}/>
                <View style={{position: 'absolute', bottom: 30, left: 10}}>
                  <Text style={{color: 'white', fontSize: 20}}>{v.name}</Text>
                  <Text style={{color: 'white', fontSize: 12}}>{v.distance}</Text>
                  <StarRating rating={v.rating} />
                </View>
              </TouchableOpacity>
            )
          })
         }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default connect(
  ({dispensaries}) => ({dispensaries})
)(Dispensaries);
