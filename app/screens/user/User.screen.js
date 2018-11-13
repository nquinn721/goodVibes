import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import HorizontalScrollCards from 'goodVibes/components/HorizontalScrollCards';
import SearchBar from 'goodVibes/components/SearchBar';

class User extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { cart } = this.props;

    return(
      <View style={Layout.container}>
        <SearchBar navigation={this.props.navigation}/>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 20, color: Layout.darkGrey}}>Hello Simon</Text>
          <View style={{marginBottom: 20}}>
          {
            cart.completeOrders.length ? 
              cart.completeOrders.map((order, i) => {
                <View key={i}>
                  <Text>{order.name}</Text>
                </View>
              }) :
              <View style={Layout.emptyCard}>
                <Text style={{color: Layout.darkGrey}}>No completed orders</Text>
              </View>
          }
          </View>

          <HorizontalScrollCards title="Order Again" data={cart.recentlyPurchsedItems} log={true} empty="No recently purchased items"/>
          <HorizontalScrollCards title="My Dispensaries" data={cart.recentlyPurchsedItems} log={true} empty="No recently dispensaries"/>
        </View>
      </View>
    )    
  }


}

const styles = StyleSheet.create({
});


export default connect(
  ({cart}) => ({cart}),
  // (dispatch) => (bindActionCreators({ completeOrder }, dispatch))
)(User);
