import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { completeOrder } from 'goodVibes/redux/actions/cart.action';

class Cart extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount(){
    const orderId = this.props.navigation.getParam('id');
    this.props.completeOrder(orderId);
    setTimeout(() => this.props.navigation.navigate('Cart'), 1000);
  }

  render() {


    return(
      <View style={styles.container}>
        <Icon name="checkbox-marked-circle-outline" type="material-community" color={Layout.green} size={100}/>
        <Text style={{color: Layout.green, fontSize: 24}}>Order placed!</Text>
      </View>
    )    
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center'
  },
});


export default connect(
  (state) => ({}),
  (dispatch) => (bindActionCreators({ completeOrder }, dispatch))
)(Cart);
