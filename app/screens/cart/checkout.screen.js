import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';
import { addToCart, removeFromCart } from 'goodVibes/redux/actions/cart.action';
import { bindActionCreators } from 'redux';
import HorizontalScrollCards from 'goodVibes/components/horizontalScrollCards';

class Cart extends React.Component {
  static navigationOptions = {
    title: null,
  };
  
  state = {
    delivery: true
  }


  render() {
    const items = this.props.navigation.getParam('items'),
          dispensary = this.props.navigation.getParam('dispensary'),
          { products } = this.props.products,
          allItems = {};

    items.forEach(item => {
      if(!allItems[item.name])allItems[item.name] = [];
      allItems[item.name].push(item);
    });

    return (
      <ScrollView style={styles.container}>
        {this.hotItems(dispensary, products)}
        {this.priceBreakDown(allItems)}

        
        <View style={{flexDirection: 'row'}}>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#0076ff', flex: 1}}></View>
          <TouchableOpacity onPress={() => this.setState({delivery: true})} style={[{padding: 10, flex: 2, borderBottomWidth: 1, borderBottomColor: '#0076ff'}, (this.state.delivery && styles.selected)]}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>Delivery</Text>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#0076ff', flex: 1}}></View>
          <TouchableOpacity onPress={() => this.setState({delivery: false})} style={[{padding: 10, flex: 2, borderBottomWidth: 1, borderBottomColor: '#0076ff'}, (!this.state.delivery && styles.selected)]}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>Pick Up</Text>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#0076ff', flex: 1}}></View>
        </View>
        {this.state.delivery ? this.delivery() : this.pickup()}
      </ScrollView>
    )
  }


  hotItems(dispensary, products){
    return (
      <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#dfdfdf'}}>
        <Text style={{color: Layout.purple}}>Hot products from {dispensary}</Text>
        <HorizontalScrollCards dontAddToCart={true} data={products} style={{width: 170}}/>
      </View>
    )
  }

  priceBreakDown(allItems){
    let total = 0;
    return (
      <View style={{borderBottomWidth: 1, borderBottomColor: '#dfdfdf', marginBottom: 15}}>
        {
          Object.keys(allItems).map((itemName, i) => {
            const set = allItems[itemName],
                  cost = allItems[itemName].reduce((a, b) => a + b.cost, 0);

            total += cost;

            return (
              <View key={i} style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, paddingTop: 25}}>
                <View style={{flex: 2}}>
                  <Text style={{color: Layout.purple, fontWeight: '700', fontSize: 16}}>{itemName}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10}}>
                   <TouchableOpacity onPress={() => this.props.removeFromCart(set[0])}>
                     <Text style={{color: Layout.purple, fontSize: 30}}>-</Text>
                   </TouchableOpacity>
                   <View style={{borderWidth: 1, borderColor: Layout.purple, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5}}>
                     <Text style={{color: Layout.purple}}>{set.length}</Text>
                   </View>
                   <TouchableOpacity onPress={() => this.props.addToCart(set[0])}>
                     <Text style={{color: Layout.purple, fontSize: 30}}>+</Text>
                   </TouchableOpacity>
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 24, position: 'absolute', bottom: 0, color: Layout.purple}}>${cost}.00</Text>
                </View>
              </View>
            )
          })
        }

        {/* TOTAL */}
        <View style={{padding: 25}}>
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#dfdfdf', paddingBottom: 10, marginBottom: 10}}>
            <Text style={{color: Layout.purple, flex: 2, textAlign: 'right', paddingRight: 20, fontSize: 18}}>Fees</Text>
            <Text style={{color: Layout.purple, flex: 1, fontSize: 18}}>$5.00</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: Layout.purple, flex: 2, textAlign: 'right', paddingRight: 20, fontSize: 25}}>Total</Text>
            <Text style={{color: Layout.purple, flex: 1, fontSize: 25}}>${total + 5}.00</Text>
          </View>
        </View>
        {/* END TOTAL */}
      </View>
    )
  }

  delivery(){
    return (
      <View style={{padding: 15}}>
        <View>
          <Text>Deliver to Home</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
            <Text style={{color: Layout.purple}}>345 E 54th st APT 4D, 10022, NY</Text>
            <Icon name="edit" size={15} type='font-awesome' color={Layout.purple}/>
          </View>
        </View>
        <View>
          <Text style={{color: Layout.purple, textAlign: 'center'}}>This order will be charged on debit</Text>
          <Text style={{color: Layout.purple, fontWeight: '800', textAlign: 'center'}}>Chase 1234</Text>
        </View>
        <TouchableOpacity style={Layout.mainButton}>
          <Text style={Layout.mainButtonText}>Place Delivery Order</Text>
        </TouchableOpacity>
      </View>
    )
  }

  pickup(){
    return (
      <View style={{padding: 15}}>
        <Text>Ready to pick up at dispensary</Text>
        <TouchableOpacity style={Layout.mainButton}>
          <Text style={Layout.mainButtonText}>Place Delivery Order</Text>
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
    borderRightColor: '#0076ff',
    borderLeftWidth: 1,
    borderLeftColor: '#0076ff',
    borderTopWidth: 1,
    borderTopColor: '#0076ff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }
});


export default connect(
  ({cart, products}) => ({cart, products}),
  (dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(Cart);
