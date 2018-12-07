import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import Review from './Review';
import SvgUri from 'react-native-svg-uri';

export default class Reviews extends React.Component{
	state = {
    selected: 'Helpful'
	}
	render(){
		const { length, reviews=[{}, {},{}, {}, {}, {}] } = this.state;

		return (
      <View style={[Layout.container, styles.container]}>
  			<ScrollView>
  				  <Text style={styles.title}>Reviews</Text>
            <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginBottom: 14}}>


              {/* CHOICES */}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => this.setState({selected: 'Helpful'})} style={[{marginRight: 16, paddingBottom: 5}, (this.state.selected === 'Helpful' && styles.selected)]}>
                  <Text style={[styles.choices, (this.state.selected === 'Helpful' && styles.selectedText)]}>Helpful</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({selected: 'Recent'})} style={(this.state.selected === 'Recent' && styles.selected)}>
                  <Text style={[styles.choices, (this.state.selected === 'Recent' && styles.selectedText)]}>Recent</Text>
                </TouchableOpacity>
              </View>
              {/* END CHOICES */}


              {/* WRITE */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgUri source={require('goodVibes/assets/images/Edit_s.svg')} fill={Layout.primaryColor}/>
                <Text style={{fontFamily: 'sfprobold', color: Layout.primaryColor}}> Write</Text>
              </View>
              {/* END WRITE */}
            </View>
            {
              reviews.map((v, i) => {
                return (
                  <View key={i}>
                    <Review length={length} />
                    {i !== reviews.length - 1 && <View style={{height: 1, backgroundColor: '#f0f0f0', marginVertical: 16}}/>}
                  </View>
                  )
              })
            }

            <View style={{marginTop: 15}}>
              <Text style={{fontFamily: 'sfpromedium', color: Layout.primaryColor, textAlign: 'center'}}>Show All Reviews</Text>
            </View>
  			</ScrollView>
      </View>
    )
	}

}



const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    ...Layout.cardShadow
  },
	title: {
    color: Layout.secondaryColor,
    fontFamily: 'circularbook',
    fontSize: 14,
    marginBottom: 11
	},
  selected: {
    borderBottomWidth: 2,
    borderBottomColor: Layout.primaryColor
  },
  selectedText: {
    fontFamily: 'sfprobold',
    color: Layout.primaryColor,
  },
  choices: {
    color: Layout.lightText,
  }
});

