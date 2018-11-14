import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import Layout from 'goodVibes/constants/Layout';
import HorizontalScrollCards from 'goodVibes/components/HorizontalScrollCards';
import SearchBar from 'goodVibes/components/SearchBar';

class User extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    links: ['Logged Experiences', 'Account', 'Settings']
  }

  render() {
    const { cart, user, dispensaries } = this.props;

    cart.recentDispensaries = [dispensaries.getDispensaryByName.apply(dispensaries, cart.recentDispensaries)].filter(d => typeof d != 'undefined');
    console.log(cart.recentDispensaries);
    return(
      <ScrollView style={Layout.container}>
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

          <HorizontalScrollCards title="Order Again" isProduct={true} data={cart.recentlyPurchasedItems} log={true} empty="No recently purchased items"/>
          <HorizontalScrollCards title="My Dispensaries" data={cart.recentDispensaries} log={true} empty="No recently dispensaries"/>
        </View>

        <View>
          {
            this.state.links.map(link => (
              <View key={link} style={{backgroundColor: 'white', padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{color: Layout.darkGrey}}>{link}</Text>
                <Icon name="ios-arrow-forward" type="ionicon" color={Layout.darkGrey} size={20} />
              </View>
            ))
          }
        </View>
      </ScrollView>
    )    
  }


}

const styles = StyleSheet.create({
});


export default connect(
  ({user, cart, dispensaries}) => ({user, cart, dispensaries}),
  // (dispatch) => (bindActionCreators({ completeOrder }, dispatch))
)(User);
