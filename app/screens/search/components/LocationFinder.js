import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from 'goodVibes/constants/Layout';
import MainButton from 'goodVibes/components/MainButton';
import { Location, Permissions } from 'expo';
import { getDispensaries } from 'goodVibes/redux/actions/dispensaries.action';

class LocationFinder extends React.Component {
  static navigationOptions = {
    header: null,
  };


  state = {
    location: null,
    text: 'Find me'
  }

  getDispensaries({ coords }){
    this.props.getDispensaries(coords);
  }

  async getLocation(onPress){
    // let { status } = await Permissions.askAsync(Permissions.LOCATION);
    // if (status !== 'granted') {
    //   this.setState({
    //     errorMessage: 'Permission to access location was denied',
    //   });
    // }
    // this.setState({text: 'Getting Location'})
    // let location = await Location.getCurrentPositionAsync({});
    let location = {
      coords: {
        latitude: 37.78825,
        longitude: -122.4324,
      }
    }
    this.setState({location})
    this.getDispensaries(location);
    onPress(location);
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
        <TouchableOpacity onPress={() => this.getLocation(onPress)} style={{flexDirection: 'row', marginTop: 13, alignItems: 'center'}}>
          <Image source={require('goodVibes/assets/images/Location.png')} style={{width: 7, height: 11, tintColor: Layout.primaryColor}}/>
          <Text style={{color: Layout.primaryColor}}> {this.state.text}</Text>
        </TouchableOpacity>
        <Text>{this.state.location && JSON.stringify(this.state.location)}</Text>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
});



export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ getDispensaries }, dispatch)
)(LocationFinder);

