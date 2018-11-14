import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import { Icon, Divider } from 'react-native-elements';
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
        <ScrollView style={Layout.container}>
          {this.info(cart)}
          <View style={{padding: 20}}>
            {
              Object.keys(cart.orders).map((dispensary, i) => {
                const order = cart.orders[dispensary],
                      items = order.items,
                      totalCost = items.reduce((a, b) => a + b.cost, 0);

                return (
                  <View key={i} style={{padding: 15, backgroundColor: 'white', ...Layout.cardShadow, marginBottom: 20}}>

                    {/* TOTAL COST */}
                    {
                      items.length > 1 &&
                      <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                          <View>
                            <Text style={{color: Layout.darkGrey, fontWeight: '500', fontSize: 16}}>{items.length} items</Text>
                          </View>
                          <View>
                            <Text style={{fontSize: 16, color: Layout.purple}}>total ${totalCost}</Text>
                          </View>
                        </View>
                        <Divider style={{ backgroundColor: Layout.lightGrey }} />
                      </View>
                    }
                    {/* END TOTAL COST */}



                    {/* ITEM LIST*/}
                    <View style={{padding: 10}}>
                      {
                        items.map((item, i) => {
                          return (
                            <View key={i} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                              <Text style={{color: Layout.darkGrey}}>{item.name}</Text>
                              <Text sytle={{color: Layout.purple}}>${item.cost}</Text>
                            </View>
                          )
                        })
                      }
                    </View>
                    {/* END ITEM LIST*/}

                  {/* DISPENSARY */}
                  <View style={{padding: 10}}>
                    <Text style={{color: '#aaa', fontSize: 12}}>from</Text>
                    <Text style={{color: Layout.darkGrey, fontWeight: '500', fontSize: 18}}>{dispensary}</Text>
                  </View>
                  {/* END DISPENSARY */}


                  {/* ORDER BUTTON */}
                    {
                      order.complete ?
                      <TouchableOpacity style={[Layout.mainButton, {borderColor: Layout.lightGrey, justifyContent: 'space-between', flexDirection: 'row'}]}>
                        <View></View>
                        <Text style={{textAlign: 'center', color: Layout.darkGrey, fontSize: 20}}>Order Received</Text>
                        <Icon name="check" size={25} color="white" />
                      </TouchableOpacity>
                      :
                      <TouchableOpacity style={Layout.mainButton} onPress={() => this.props.navigation.navigate('Checkout', {order})}>
                        <Text style={Layout.mainButtonText}>PROCEED TO CHECKOUT</Text>
                      </TouchableOpacity>
                    }
                  {/* END ORDER BUTTON */}


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
            <Icon name='cancel' size={175} color={Layout.mediumGrey} type="material-community" />
            <Text style={{color: Layout.mediumGrey, fontSize: 18}}>You do not have any orders</Text>
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
          <Text style={{color: Layout.red, fontWeight: '800', fontSize: 16}}>{cart.totalItems} items</Text>
          <Text style={{color: Layout.red, fontWeight: '800', fontSize: 16}}>{cart.totalDispensaries} dispensaries</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
});


export default connect(
  ({cart}) => ({cart})
)(Cart);
