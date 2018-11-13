import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';
import HorizontalScrollCards from 'goodVibes/components/HorizontalScrollCards';

class Cart extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { cart } = this.props;

    let layout;



    if(cart.totalItems > 0){
      layout = (
        <ScrollView style={styles.container}>
          {this.info(cart)}
          <View>
            {
              Object.keys(cart.orders).map((dispensary, i) => {
                const order = cart.orders[dispensary],
                      items = order.items,
                      totalCost = items.reduce((a, b) => a + b.cost, 0);

                return (
                  <View key={i} style={{padding: 15}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View>
                        <Text style={{color: Layout.purple, fontWeight: '500', fontSize: 18}}>{items.length} items</Text>
                        <Text style={{color: '#aaa', fontSize: 12}}>from</Text>
                        <Text style={{color: Layout.purple, fontWeight: '500', fontSize: 18}}>{dispensary}</Text>
                      </View>
                      <View>
                        <Text style={{fontSize: 24}}>Total ${totalCost}.00</Text>
                      </View>
                    </View>
                    <HorizontalScrollCards data={items} dontAddToCart={true}/>
                    {
                      order.complete ?
                      <TouchableOpacity style={[Layout.mainButton, {backgroundColor: Layout.green, justifyContent: 'space-between', flexDirection: 'row'}]}>
                        <View></View>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>Track my order</Text>
                        <Icon name="check" size={25} color="white" />
                      </TouchableOpacity>
                      :
                      <TouchableOpacity style={Layout.mainButton} onPress={() => this.props.navigation.navigate('Checkout', {order})}>
                        <Text style={Layout.mainButtonText}>PROCEED TO CHECKOUT</Text>
                      </TouchableOpacity>
                    }
                  </View>
                )
              })
            }
          </View> 
        </ScrollView>
      );
      
    }else {
      layout = (
        <View style={styles.container}>
          {this.info(cart)}
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: 0}}>
              <Image style={{width: 100, height: 100, marginTop: 30}} source={{uri: 'https://cdn.shopify.com/s/files/1/2091/5959/products/PurLoveCbd1_1024x1024.jpg?v=1516738506'}} />
            </View>
            <Icon name='cancel' size={175} color='#000000a3' type="material-community" />
            <Text style={{color: '#aaa', fontSize: 18}}>You do not have any orders</Text>
          </View>
        </View>
      );
      
    }

    return layout;
  }


  info(cart){
    return(
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', borderBottomWidth: 1, borderBottomColor: '#dfdfdf', paddingVertical: 20}}>
        <View style={{justifyContent: 'flex-end'}}>
          <Text style={{textAlign: 'right', color: Layout.purple}}>You have</Text>
          <Text style={{textAlign: 'right', color: Layout.purple}}>From</Text>
        </View>
        <View>
          <Text style={{color: Layout.purple, fontWeight: '800'}}>{cart.totalItems} items</Text>
          <Text style={{color: Layout.purple, fontWeight: '800'}}>{cart.totalDispensaries} dispensaries</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});


export default connect(
  ({cart}) => ({cart})
)(Cart);
