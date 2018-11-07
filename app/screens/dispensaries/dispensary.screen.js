import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import Card from 'goodVibes/components/card';
import { Icon } from 'react-native-elements';
import DoubleListCards from 'goodVibes/components/doubleListCards';

class Dispensaries extends React.Component {
  static navigationOptions = {
    title: ""
  };

  render() {
    const { navigation } = this.props;
    const {img, name, distance, stars, totalRatings} = navigation.getParam('dispensary', {});

    return (
      <ScrollView style={styles.container}>
        <View style={{height: 200}}>
          <Image style={{height: 250}} source={img} />
        </View>
        <View style={{padding: 15, justifyContent: 'space-between', flexDirection: 'row'}}>
          <View>
            <Image style={{height: 100, width: 100, borderRadius: 10, borderColor: 'black', borderWidth: 1}} source={img} />
            <Text style={{fontWeight: '900', color: '#1e1254'}}>{name}</Text>
            <Text style={{color: '#bababa'}}>{distance} mi</Text>
            <Text style={{color: '#ffb900'}}>{stars} stars ({totalRatings})</Text>
          </View>
          <View sytle={{alignItems: 'center', backgroundColor: 'red'}}>
            <Icon name="info" type="font-awesome" size={35}/>
          </View>
        </View>

        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
          <View></View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Menu</Text>
          </View>
          <View>
            <Icon name="filter-list" size={25} />
          </View>
        </View>
          
        <DoubleListCards data={this.props.dispensaries} />
      </ScrollView>
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
