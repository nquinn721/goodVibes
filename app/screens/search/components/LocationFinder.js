import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import MainButton from 'goodVibes/components/MainButton';

class LocationFinder extends React.Component {
  static navigationOptions = {
    header: null,
  };


  state = {
    location: null
  }

  render() {
    const { onPress } = this.props;

    return (
      <View style={[Layout.paddedCard, {alignItems: 'center'}]}>
        <Text style={{color: Layout.lightText, fontSize: 14}}>You are cool and we need your location</Text>
        <Text style={{color: Layout.lightText, fontSize: 14}}>to show dope dispensaries in your area</Text>
        <View style={{marginTop: 13}}>
          <MainButton text="Enter Location" style={{paddingHorizontal: 50, paddingVertical: 10}} onPress={onPress}/>
        </View>
        <View style={{flexDirection: 'row', marginTop: 13, alignItems: 'center'}}>
          <Image source={require('goodVibes/assets/images/Location.png')} style={{width: 7, height: 11, tintColor: Layout.primaryColor}}/>
          <Text style={{color: Layout.primaryColor}}> Find me</Text>
        </View>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
});



export default connect(
  // ({products, dispensaries}) => ({products, dispensaries})
)(LocationFinder);

