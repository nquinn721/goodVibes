import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import GreenHeader from 'goodVibes/components/GreenHeader';
import RoundedImage from 'goodVibes/components/RoundedImage';
import ProductInfo from 'goodVibes/components/generic/ProductInfo';
import MainButton from 'goodVibes/components/MainButton';
import SvgUri from 'react-native-svg-uri';
import Slider from 'goodVibes/components/generic/Slider';
import Reviews from 'goodVibes/components/Reviews';
import HorizontalList from 'goodVibes/components/HorizontalList';
import HorizontalPicsList from 'goodVibes/components/HorizontalPicsList';
import LookingForSomething from 'goodVibes/components/LookingForSomething';

class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loaded: true,
          distance: 30,
          minDistance: 10,
          maxDistance: 100
  }

  render() {
    const data = {
      name: 'Blue Dream',
      type: 'Indica',
      rating: 3.4,
      rightText: ['THC', '18%-21%'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor dolor. Ut lacinia sed lectus porttitor sagittis. Sed scelerisque tristique justo, et vestibulum lectus luctus quis. Praesent iaculis odio vitae ex sollicitudin, ut mattis risus'
    }

    return (
      <View style={Layout.container}>
        <ScrollView 
          style={{backgroundColor: Layout.bgColor}}
          showsVerticalScrollIndicator={false} 
          >
          <GreenHeader title="Blue Dream"/>

        {/* TOP SECTION */}
          <View style={[styles.section, {paddingTop: 0}]}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: -40}}>
            	<RoundedImage source={{uri: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg'}} />
              <View style={{position: 'absolute', right: 20, top: 50}}>
                <Text style={styles.reviewedText}>Reviewed on</Text>
                <Text style={styles.reviewedText}>11.12.18</Text>
              </View>
            </View>
          <View>
            <ProductInfo data={data} loaded={this.state.loaded}/>
          </View>
          <View>
            <Text>
            <Text style={{fontSize: 14, color: Layout.darkText}}>{data.description}</Text>
              <Text style={{color: Layout.primaryColor, fontSize: 14}}>... Read More</Text>
            </Text>
          </View>
          <MainButton text="Log Experience" style={{padding: 10, marginTop: 25}} textStyle={{fontSize: 14}} />
        </View>
        {/* END TOP SECTION */}

        <View style={styles.separator} />


        {/* EFFECTS */}
        <View style={styles.section}>
          <Text style={{fontFamily: 'circularbook', color: Layout.secondaryColor, fontSize: 14}}>Effects</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: Layout.thirdaryColor, fontSize: 10}}>Based on 22 user logs</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                <SvgUri source={require('goodVibes/assets/images/Record.svg')} fill={Layout.primaryColor} />
                <Text style={{fontFamily: 'sfprobold', color: Layout.primaryColor}}> Record</Text>
              </View>
          </View>

          <View style={{padding: 40}}>
              <Slider text="Relaxed"/>
              <Slider text="Sleepy" style={{marginTop: 10}}/>
              <Slider text="Happy" style={{marginTop: 10}}/>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontFamily: 'circularbook', fontSize: 14, color: Layout.secondaryColor}}>Medical</Text>
              <Text style={{color: Layout.thirdaryColor, fontSize: 10}}>Good for</Text>
              <Text style={{color: Layout.lightText}}>Depression</Text>
            </View>
            <View>
              <Text style={{fontFamily: 'circularbook', fontSize: 14, color: Layout.secondaryColor}}>Flavors</Text>
              <Text style={{color: Layout.thirdaryColor, fontSize: 10}}>Tastes like</Text> 
              <Text style={{color: Layout.lightText}}>Blueberry, Sweet, Nate's Butt</Text>
            </View>
          </View>
        </View>
        {/* END EFFECTS */}

        <View style={styles.separator} />
        <Reviews length="short"/>        
        <View style={styles.separator} />
        <HorizontalPicsList product={this.props.products.products[0]}/>
        <View style={styles.separator} />
        <HorizontalList title="Similar Strains" data={this.props.products.products} />
        <View style={styles.separator} />
        <LookingForSomething />
        <View style={{height: 50}}/>

        </ScrollView>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
    separator: {
      height: 20,
    },
    reviewedText: {
      color: Layout.lightText,
      textAlign: 'right'
    },

    section: {
      padding: 30,
      backgroundColor: 'white',
      ...Layout.cardShadow
    },
    
});



export default connect(
  ({products}) => ({products})
)(SearchScreen);