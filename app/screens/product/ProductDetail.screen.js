import React from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import Header from 'goodVibes/components/Header';
import RoundedImage from 'goodVibes/components/RoundedImage';
import ProductInfo from 'goodVibes/components/generic/ProductInfo';
import MainButton from 'goodVibes/components/MainButton';
import SvgUri from 'react-native-svg-uri';
import Slider from 'goodVibes/components/generic/Slider';
import Reviews from 'goodVibes/components/Reviews';
import HorizontalList from 'goodVibes/components/HorizontalList';
import HorizontalPicsList from 'goodVibes/components/HorizontalPicsList';
import LookingForSomething from 'goodVibes/components/LookingForSomething';
import ImageSlider from 'react-native-image-slider';

class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loaded: true,
          distance: 30,
          minDistance: 10,
          maxDistance: 100,
          y: 0
  }
  onScroll(e){
    const { y } = e.nativeEvent.contentOffset;
    this.setState({y});
  }

  render() {
    const product = this.props.navigation.getParam('product'),
          type = this.props.navigation.getParam('type');


          product.rightText = ['THC', '18%-21%']

    return (
      <View style={Layout.container}>
      {
        this.state.y > (type === 'strain' ? 80 : 250) && 
                <Header short={true} navigation={this.props.navigation} showTitle={true} title={product.name} sticky={true}/>
      }
        <ScrollView 
          style={{backgroundColor: Layout.bgColor}}
          showsVerticalScrollIndicator={false} 
          onScroll={this.onScroll.bind(this)}
          scrollEventThrottle={100}
          >
          {type === 'strain' ? 
                <Header navigation={this.props.navigation} title={product.name} ypos={this.state.y}/>

              :
              <View style={{height: 40, position: 'absolute', zIndex: 1, width: '100%', padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <SvgUri source={require('goodVibes/assets/images/Back.svg')} fill="black"/>
                </TouchableOpacity>
                <SvgUri source={require('goodVibes/assets/images/Heart.svg')} fill="black" />
              </View>
            }

          {type !== 'strain' && <ImageSlider images={product.images} style={{height: 250}}/>}
        {/* TOP SECTION */}
          <View style={[styles.section, {paddingTop: 0}]}>
              {
                type === 'strain' &&
                  <View style={{justifyContent: 'center', alignItems: 'center', marginTop: -40}}>
                    <RoundedImage source={{uri: 'https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg'}} />
                  </View>
              }
          <View style={{marginTop: (type === 'product' ? 20 : 0)}}>
            <ProductInfo data={product} loaded={this.state.loaded} style={{height: 300}}/>
          </View>
          <View>
            <Text>
            <Text style={{fontSize: 14, color: Layout.darkText}}>{product.description}</Text>
              <Text style={{color: Layout.primaryColor, fontSize: 14}}>... Read More</Text>
            </Text>
          </View>
          <MainButton text="Log Experience" style={{padding: 10, marginTop: 25}} textStyle={{fontSize: 14}} />
        </View>
        {/* END TOP SECTION */}

        <View style={{position: 'absolute', right: 30, top: (type === 'strain' ? 90 : 210)}}>
          <Text style={styles.reviewedText}>Reviewed on</Text>
          <Text style={styles.reviewedText}>11.12.18</Text>
        </View>
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
              <Slider text="Relaxed" disabled={true} value={8}/>
              <Slider text="Sleepy" style={{marginTop: 10}} disabled={true}/>
              <Slider text="Happy" style={{marginTop: 10}} disabled={true} value={9}/>
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
        <Reviews product={product} navigation={this.props.navigation}/>        
        <View style={styles.separator} />
        <HorizontalPicsList product={this.props.products.products[0]} navigation={this.props.navigation}/>
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