import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Input } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';
import { addToCart, removeFromCart } from 'goodVibes/redux/actions/cart.action';
import { bindActionCreators } from 'redux';
import HorizontalScrollCards from 'goodVibes/components/HorizontalScrollCards';

class Cart extends React.Component {
  static navigationOptions = {
    title: null,
  };
  
  state = {
    delivery: true,
    total: 0
  }


  render() {
    const { items, dispensary, id } = this.props.navigation.getParam('order'),
          { products } = this.props.products,
          allItems = {};
          
    items.forEach(item => {
      if(!allItems[item.name])allItems[item.name] = [];
      allItems[item.name].push(item);
    });

    return (
      <ScrollView style={Layout.container}>
        {this.hotItems(dispensary, products)}
        {this.productBreakdown(allItems, items.length)}

        {/* DELIVERY OR PICKUP */}
        <View style={{...Layout.cardShadow, backgroundColor: 'white', padding: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{borderBottomWidth: 1, borderBottomColor: Layout.red, flex: 1}}></View>
            <TouchableOpacity onPress={() => this.setState({delivery: true})} style={[{padding: 10, flex: 2, borderBottomWidth: 1, borderBottomColor: Layout.red}, (this.state.delivery && styles.selected)]}>
              <Text style={[{fontSize: 18, textAlign: 'center'}, (this.state.delivery && {color: Layout.red})]}>Delivery</Text>
            </TouchableOpacity>
            <View style={{borderBottomWidth: 1, borderBottomColor: Layout.red, flex: 1}}></View>
            <TouchableOpacity onPress={() => this.setState({delivery: false})} style={[{padding: 10, flex: 2, borderBottomWidth: 1, borderBottomColor: Layout.red}, (!this.state.delivery && styles.selected)]}>
              <Text style={[{fontSize: 18, textAlign: 'center'}, (!this.state.delivery && {color: Layout.red})]}>Pick Up</Text>
            </TouchableOpacity>
            <View style={{borderBottomWidth: 1, borderBottomColor: Layout.red, flex: 1}}></View>
          </View>
          {this.state.delivery ? this.delivery(id) : this.pickup(id)}
        </View>
        {/* END DELIVERY OR PICKUP */}


      </ScrollView>
    )
  }


  hotItems(dispensary, products){
    return (
      <View style={{paddingLeft: 20, paddingTop: 10}}>
        <Text style={{color: Layout.purple}}>Hot products from {dispensary}</Text>
        <HorizontalScrollCards dontAddToCart={true} data={products} isProduct={true} onPress={product => this.navigation.navigate('Product', {product})}/>
      </View>
    )
  }

  productBreakdown(allItems, totalItems){
    return (
      <View style={{padding: 20}}>
        <Text style={{color: Layout.purple, marginBottom: 10}}>{totalItems} items</Text>
        {
          Object.keys(allItems).map((itemName, i) => {
            const set = allItems[itemName],
                  cost = allItems[itemName].reduce((a, b) => a + b.cost, 0),
                  item = set[0];

            this.state.total += cost;
            this.state.overAllTotal = this.state.total + 5 + 10.5;

            return (
              <View key={i} style={Layout.card}>

                {/* IMAGE TYPE AND NAME*/}
                <View>
                  <Image source={{uri: item.img}} style={{width: 50, height: 50, margin: 10}}/>
                  <Text style={{color: Layout.darkGrey, fontWeight: '700', fontSize: 16}}>{itemName}</Text>
                  <Text style={{color: Layout.mediumGrey, fontSize: 12}}>{item.type}</Text>
                </View>
                {/* END IMAGE TYPE AND NAME*/}


                <View style={{padding: 10, paddingTop: 30}}>
                    {/* COST */}
                    <Text style={{fontSize: 16, color: Layout.purple}}>${cost}</Text>
                    {/* END COST */}

                  {/* ADD / SUBTRACT */}
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10}}>
                   <TouchableOpacity onPress={() => this.props.removeFromCart(set[0])}>
                     <Text style={{color: Layout.purple, fontSize: 30}}>-</Text>
                   </TouchableOpacity>
                   <View>
                     <Text style={{color: Layout.purple, fontSize: 20, width: 30, textAlign: 'center'}}>{set.length}</Text>
                   </View>
                   <TouchableOpacity onPress={() => this.props.addToCart(set[0])}>
                     <Text style={{color: Layout.purple, fontSize: 30}}>+</Text>
                   </TouchableOpacity>
                  </View>
                  {/* END ADD / SUBTRACT */}
                </View>
              </View>
            )
          })
        }

        {/* PROMO */}
        <View style={Layout.card}>
          <Text style={{color: Layout.mediumGrey, borderBottomWidth: 1, borderBottomColor: Layout.mediumGrey}}>Input your code here</Text>
          <TouchableOpacity style={{borderColor: Layout.mediumGrey, borderWidth: 1, borderRadius: 5, padding: 10}}>
            <Text style={{color: Layout.mediumGrey}}>Apply</Text>
          </TouchableOpacity>
        </View>
        {/* END PROMO */}


        {/* TOTAL */}
        <View style={[Layout.card]}>
          <View>
            <Text>Subtotal</Text>
            <Text>Extra Savings</Text>
            <Text>Delivery Fee</Text>
            <Text>Taxes</Text>
          </View>
          <View>
            <Text style={{textAlign: 'right'}}>${this.state.total}</Text>
            <Text style={{textAlign: 'right'}}>$0.00</Text>
            <Text style={{textAlign: 'right'}}>$5.00</Text>
            <Text style={{textAlign: 'right'}}>$10.50</Text>
            <Text>total ${this.state.total + 5 + 10.5}</Text>
          </View>
        </View>
        {/* END TOTAL */}
      </View>
    )
  }

  delivery(id){
    return (
      <View style={{padding: 15}}>
        <View>
          <Text>Deliver to <Text style={{fontWeight: '600'}}>Home</Text></Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
            <Text style={{color: Layout.purple}}>345 E 54th st APT 4D, 10022, NY</Text>
            <Icon name="edit" size={15} type='font-awesome' color={Layout.purple}/>
          </View>
        </View>
        <View>
          <Text style={{color: Layout.purple, textAlign: 'center'}}>This order will be charged on debit</Text>
          <Text style={{color: Layout.purple, fontWeight: '800', textAlign: 'center'}}>
            <Text>Chase 1234</Text>
            <Text style={{fontWeight: '500'}}> for </Text>
            <Text>${this.state.overAllTotal}</Text>
          </Text>
        </View>
        <TouchableOpacity style={Layout.mainButtonRounded} onPress={() => this.props.navigation.navigate('CompleteOrder', {id})}>
          <Text style={Layout.mainButtonRoundedText}>Place Delivery Order</Text>
        </TouchableOpacity>
      </View>
    )
  }

  pickup(id){
    return (
      <View style={{padding: 15}}>
        <Text>Ready to pick up at dispensary</Text>
        <TouchableOpacity style={Layout.mainButtonRounded}>
          <Text style={Layout.mainButtonRoundedText}>Place Pickup Order</Text>
        </TouchableOpacity>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  selected: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: Layout.red,
    borderLeftWidth: 1,
    borderLeftColor: Layout.red,
    borderTopWidth: 1,
    borderTopColor: Layout.red,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }
});


export default connect(
  ({cart, products}) => ({cart, products}),
  (dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(Cart);
