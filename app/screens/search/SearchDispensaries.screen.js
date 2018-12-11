import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import LocationFinder from './components/LocationFinder';
import DispensaryList from './components/DispensaryList';

class SearchScreen extends React.Component {

  state = {
    location: null
  }

  

  render() {
    const { dispensaries: {dispensaries} } = this.props;
    return (
      <View style={Layout.container}>
          {
            !this.state.location ?
            <LocationFinder onPress={(location) => this.setState({location})}/> :
            <DispensaryList navigation={this.props.navigation} location={this.state.location} dispensaries={dispensaries}/>

          }
          
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
});



export default connect(
  ({dispensaries}) => ({dispensaries})
)(SearchScreen);