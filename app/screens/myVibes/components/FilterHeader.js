import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import Filters from './Filters';
import Header from 'goodVibes/components/Header';



class FilterHeader extends React.Component {

  render() {
    const { filters, title } = this.props;

    return (
    	<View>
	      <View style={Layout.card}>
	        <Header rightIcon={false} short={true} title={title} showTitle={true} navigation={this.props.navigation}/>
	        <Filters />
	      </View>


	      <View style={{paddingHorizontal: 20}}>
	        <View style={{marginTop: 21}}>
	          <Text style={{fontFamily: 'sfpromedium', fontSize: 16, color: Layout.lightText}}>10 total</Text>
	        </View>
	      </View>
	    </View>
    );
  }

 
}

const styles = StyleSheet.create({
});



export default connect(
  // ({products, dispensaries}) => ({products, dispensaries})
)(FilterHeader);