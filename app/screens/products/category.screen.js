import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import DoubleListCards from 'goodVibes/components/doubleListCards';

class Products extends React.Component {
  static navigationOptions = {
  	title: ''
  };

  render() {
  	const title = this.props.navigation.getParam('title'),
          { products } = this.props.products;

  	return (
  		<ScrollView style={styles.container}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30, paddingTop: 35}}>
  			  <Text style={{color: Layout.purple, fontSize: 25}}>{title}</Text>
          <Icon name="filter-list" size={30} color={Layout.purple}/>
        </View>

        <DoubleListCards data={products} onPress={(product) => this.props.navigation.navigate('Product', {product})}/>

  		</ScrollView>
  	)
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default connect(
  ({products}) => ({products})
)(Products);