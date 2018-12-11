import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import Layout from 'goodVibes/constants/Layout';
import HorizontalList from 'goodVibes/components/HorizontalList';
import Item from 'goodVibes/components/HorizontalList/Item';

class MapViewScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  

  render() {
    const { dispensaries: {dispensaries} } = this.props,
          { coords } = this.props.navigation.getParam('location');

    const markers = dispensaries;
    if(!dispensaries)return <View></View>
    return (
      <View style={Layout.container}>
        <View style={{flex: 1}}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            region={{
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421, 
              ...coords
            }}
          >

          {
            markers && markers.map((d, i) => (<MapView.Marker
              coordinate={d.coordinates}
              key={i}
              title={d.name}
            />))
          }
                
          </MapView>
        </View>
        <View style={{backgroundColor: 'white', height: 170}}>
          
              <FlatList 
                data={dispensaries}
                horizontal={true}
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
});



export default connect(
  ({dispensaries}) => ({dispensaries}),
)(MapViewScreen);