import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { connect } from 'react-redux'; 
import HorizontalScroll from '../components/horizontalScroll';

class Discover extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[styles.container, styles.contentContainer]}>
        <ScrollView>
          <View style={{height: 200}}>
            <Image style={{height: 200}} source={require('../assets/images/avatar.png')}></Image>
          </View>

          <HorizontalScroll title='Dispensaries near Me' data={this.props.dispensaries} />
          <HorizontalScroll title='Hot Products' data={this.props.dispensaries} />
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
  (state) => ({user: state.user, dispensaries: state.dispensaries})
)(Discover);