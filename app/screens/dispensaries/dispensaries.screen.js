import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import SearchBar from 'goodVibes/components/SearchBar';
import Layout from 'goodVibes/constants/Layout';

class Dispensaries extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { dispensaries } = this.props.dispensaries;

    return (
      <View style={Layout.container}>
        <SearchBar navigation={this.props.navigation}/>
        <View style={{paddingTop: 15, justifyContent: 'space-around', flexDirection: 'row'}}>
          <View></View>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={() => this.props.navigation.navigate('DispensaryMap')}>
            <Text>Map View</Text>
            <Icon name="map-o" type="font-awesome" size={35}/>
          </TouchableOpacity>
          <View>
            <Icon name="filter-list" size={35} />
          </View>
        </View>
        <ScrollView style={styles.container}>
         {
          dispensaries.map((v, i) => {
            return (
              <View key={i}>
              </View>
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
