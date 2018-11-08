import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Cart extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { cart } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={{textAlign: 'right'}}>You have</Text>
            <Text style={{textAlign: 'right'}}>From</Text>
          </View>
          <View>
            <Text>{cart.totalItems} items</Text>
            <Text>{cart.totalDispensaries} dispensaries</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
});


export default connect(
  ({cart}) => ({cart})
)(Cart);
