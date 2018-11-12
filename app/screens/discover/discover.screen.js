import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux'; 
import HorizontalScrollCards from 'goodVibes/components/HorizontalScrollCards';
import DoubleListCards from 'goodVibes/components/DoubleListCards';
import SearchBar from 'goodVibes/components/SearchBar';
import { bindActionCreators } from 'redux';
import { getYelpDispensaries } from 'goodVibes/redux/actions/dispensary.action';
import Layout from 'goodVibes/constants/Layout';
import MainAd from 'goodVibes/components/MainAd';
import UserAd from 'goodVibes/components/UserAd';

class Discover extends React.Component {
  static navigationOptions = {
    header: null,
  };
  componentWillMount(){
    // this.props.getYelpDispensaries();
  }
  render() {
    const { dispensaries } = this.props.dispensaries,
          { hotProducts } = this.props.products;
    return (
      <View style={[Layout.container, styles.contentContainer]}>
        <SearchBar navigation={this.props.navigation}/>
        <ScrollView>
          <MainAd />

          <View style={{padding: 10}}>
            <HorizontalScrollCards title='Dispensaries near by' data={dispensaries} onPress={(d) => this.props.navigation.navigate('Dispensary', {dispensary: d})}/>
          </View>
          <DoubleListCards title='Hot Products' data={hotProducts} />
          <UserAd />
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
});

export default connect(
  ({user, dispensaries, products}) => ({user, dispensaries, products}),
  (dispatch) => (bindActionCreators({ getYelpDispensaries }, dispatch))
)(Discover);