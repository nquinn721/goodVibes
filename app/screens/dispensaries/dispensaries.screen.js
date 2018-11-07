import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Card from 'goodVibes/components/card';
import { Icon } from 'react-native-elements';
import SearchBar from 'goodVibes/components/search';

class Dispensaries extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <View style={{paddingTop: 15, justifyContent: 'space-around', flexDirection: 'row'}}>
          <View></View>
          <View style={{alignItems: 'center'}}>
            <Text>Map View</Text>
            <Icon name="map-o" type="font-awesome" size={35}/>
          </View>
          <View>
            <Icon name="filter-list" size={35} />
          </View>
        </View>
        <ScrollView style={styles.container}>
         {
          this.props.dispensaries.map((v, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('Dispensary', {dispensary: v})}>
                <Card data={v}/>
              </TouchableOpacity>
            )
          })
         }
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
});

export default connect(
  ({dispensaries}) => ({dispensaries})
)(Dispensaries);
