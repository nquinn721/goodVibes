import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import Layout from 'goodVibes/constants/Layout';
import HorizontalList from 'goodVibes/components/HorizontalList';
import Item from 'goodVibes/components/HorizontalList/Item';
import SvgUri from 'react-native-svg-uri';

class MapViewScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  scrollToItem(dispensary){
    const index = this.markers.indexOf(dispensary);
    this.list.scrollToIndex({viewPosition: 0.5, index: index});
  }

  

  render() {
    const { dispensaries: {dispensaries} } = this.props,
          { coords } = this.props.navigation.getParam('location');

    this.markers = dispensaries;

    if(!dispensaries)return <View></View>
    return (
      <View style={Layout.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <SvgUri source={require('goodVibes/assets/images/Back.svg')} width={10} height={20} fill="white" />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            // region={{
            //   latitudeDelta: 0.0922,
            //   longitudeDelta: 0.0421, 
            //   ...coords
            // }}
          >

          {
            this.markers && this.markers.map((d, i) => (d && d.coordinates && <MapView.Marker
              coordinate={d.coordinates}
              key={i}
              title={d.name}
              onPress={this.scrollToItem.bind(this, d)}
            />))
          }
                
          </MapView>
        </View>
        <View style={{backgroundColor: 'white', height: 170}}>
          
              <FlatList 
                data={dispensaries}
                horizontal={true}
                ref={list => this.list = list}
                style={{marginTop: -45}}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => <Item item={item} type='dispensary' />}
              />
        </View>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: Layout.primaryColor,
    borderRadius: 100, 
    width: 40, 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute', 
    top: 17, 
    zIndex: 2,
    left: 17
  }
});



export default connect(
  ({dispensaries}) => ({dispensaries}),
)(MapViewScreen);