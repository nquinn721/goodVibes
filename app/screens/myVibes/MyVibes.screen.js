import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import RoundedImage from 'goodVibes/components/RoundedImage';
import SvgUri from 'react-native-svg-uri';
import MyReviews from './components/MyReviews';


const Record = require('goodVibes/assets/images/Record.svg');


class MyVibesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View style={Layout.container}>
        <ScrollView style={[Layout.container]}>

        {/* TOP */}
        <View style={Layout.card}>
          <View style={{height: 100}}>
            <Image source={require('goodVibes/assets/images/goodstuff.jpg')} style={{height: 150}}/>
          </View>
          <View style={{justifyContent: 'space-around', flexDirection: 'row', marginBottom: 17}}>
            <View />
            <View style={{alignItems: 'center'}}>
              <RoundedImage source={require('goodVibes/assets/images/usertoken.png')} style={{marginBottom: 10}}/>
              <Text>
                <Text style={{fontFamily: 'circularbook', fontSize: 16}}>Hello</Text>
                <Text style={{fontFamily: 'circularbold', fontSize: 16}}>Cannabeast234</Text>
              </Text>
            </View>
            <SvgUri source={Record} style={{marginTop: 70}} width={20} height={20}/>
          </View>

          <View style={styles.listItem}>
            <SvgUri width={11} height={11} source={require('goodVibes/assets/images/Edit_s.svg')} style={styles.listItemIcon} fill={Layout.primaryColor}/>
            <Text style={{fontSize: 14, flexGrow: 3, marginLeft: 10}}>Reviews & Notes</Text>
            <Text style={{fontFamily: 'sfpromedium', fontSize: 14, color: Layout.thirdaryColor}}>10</Text>
          </View>
          <View style={styles.listItem}>
            <SvgUri width={11} height={11} source={Record} style={styles.listItemIcon} fill={Layout.primaryColor}/>
            <Text style={{fontSize: 14, flexGrow: 3, marginLeft: 10}}>Record Effects</Text>
            <Text style={{fontFamily: 'sfpromedium', fontSize: 14, color: Layout.thirdaryColor}}>4</Text>
          </View>
          <View style={styles.listItem}>
            <SvgUri width={11} height={11} source={require('goodVibes/assets/images/Heart.svg')} style={styles.listItemIcon} fill={Layout.primaryColor}/>
            <Text style={{fontSize: 14, flexGrow: 3, marginLeft: 10}}>Favorites</Text>
            <Text style={{fontFamily: 'sfpromedium', fontSize: 14, color: Layout.thirdaryColor}}>10</Text>
          </View>
          <View style={styles.listItem}>
            <SvgUri width={11} height={11} source={require('goodVibes/assets/images/Camera.svg')} style={styles.listItemIcon} fill={Layout.primaryColor}/>
            <Text style={{fontSize: 14, flexGrow: 3, marginLeft: 10}}>My Pictures</Text>
            <Text style={{fontFamily: 'sfpromedium', fontSize: 14, color: Layout.thirdaryColor}}>2</Text>
          </View>
        </View>
        {/* END TOP */}

        <View style={styles.separator}/>


        <MyReviews />

        </ScrollView>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
    separator: {
      height: 20,
    },
    listItem: {
      flexDirection: 'row',
      paddingLeft: 20,
      paddingVertical: 25,
      alignItems: 'center',
      paddingRight: 30,
      justifyContent: 'space-between',
      borderTopWidth: 2,
      borderTopColor: '#f0f0f0'
    },
    listItemIcon: {
      width: 11, 
      height: 11,
    }
});



export default connect(
  // ({products, dispensaries}) => ({products, dispensaries})
)(MyVibesScreen);