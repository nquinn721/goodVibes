import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux'; 
import HorizontalScrollCards from 'goodVibes/components/horizontalScrollCards';
import SearchBar from 'goodVibes/components/search';

class Discover extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[styles.container, styles.contentContainer]}>
        <SearchBar />
        <ScrollView>
          <View style={{height: 200}}>
            <Image style={{height: 200}} source={require('goodVibes/assets/images/avatar.png')}></Image>
          </View>

          <HorizontalScrollCards title='Dispensaries near Me' data={this.props.dispensaries} onPress={(d) => this.props.navigation.navigate('Dispensary', {dispensary: d})}/>
          <HorizontalScrollCards title='Hot Products' data={this.props.dispensaries} />
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

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
  ({user, dispensaries}) => ({user, dispensaries})
)(Discover);