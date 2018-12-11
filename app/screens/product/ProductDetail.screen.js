import React from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList, Image, TouchableOpacity, WebView } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import Header from 'goodVibes/components/Header';
import HeaderOverlay from 'goodVibes/components/HeaderOverlay';
import RoundedImage from 'goodVibes/components/RoundedImage';
import ProductInfo from 'goodVibes/components/generic/ProductInfo';
import MainButton from 'goodVibes/components/MainButton';
import SvgUri from 'react-native-svg-uri';
import Reviews from 'goodVibes/components/Reviews';
import HorizontalList from 'goodVibes/components/HorizontalList';
import HorizontalPicsList from 'goodVibes/components/HorizontalPicsList';
import LookingForSomething from 'goodVibes/components/LookingForSomething';
import ImageSlider from 'react-native-image-slider';
import Effects from 'goodVibes/components/Effects';
import StoreInfo from 'goodVibes/components/StoreInfo';
import { NavigationActions } from 'react-navigation';
import ScrollViewHeader from 'goodVibes/components/ScrollViewHeader';

class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loaded: true,
  }

  render() {
    const product = this.props.navigation.getParam('product'),
          type = this.props.navigation.getParam('type'),
          { products } = this.props.products,
          { dispensaries } = this.props.dispensaries;

    let similar = type !== 'dispensary' ? products : dispensaries;

    let effects, listTitle;
    console.log(product);

    if(type !== 'dispensary'){
      product.rightText = ['THC', '18%-21%'];
      effects = [{text: 'Relaxed', value: 8}, {text: 'Sleepy', value: 3}, {text: 'Happy', value: 9}]
      listTitle = 'Similar ' + (type.replace(/\w/, w => w.toUpperCase())) + 's';
    } else {
      product.rightText = ['Open until 10pm'];
      effects = [{text: 'Friendliness', value: 7}, {text: 'Variety', value: 7}, {text: 'Cool Factor', value: 5}, {text: '$$$', value: 5}]
      listTitle = 'More Dispensaries';
    }

    return (
      <View style={Layout.container}>
          <ScrollViewHeader type={type} product={product} navigation={this.props.navigation}>
          {type !== 'product' ? 
                <Header navigation={this.props.navigation} title={product.name}/>:
                <View>
                  <HeaderOverlay navigation={this.props.navigation} /> 
                  <ImageSlider images={product.images} style={{height: 250}}/>
                </View>
            }


        {/* TOP SECTION */}
          <View style={[styles.section, {paddingTop: 0}]}>
              {
                type !== 'product' &&
                  <View style={{justifyContent: 'center', alignItems: 'center', marginTop: -40}}>
                    <RoundedImage source={{uri: product.img}} type={type}/>
                  </View>
              }
          <View style={{marginTop: 20}}>
            <ProductInfo data={product} loaded={this.state.loaded} style={{height: 300}}/>
          </View>
          <View>
          {
            product.description && 
            <Text>
              <Text style={{fontSize: 14, color: Layout.darkText}}>{product.description}</Text>
              <Text style={{color: Layout.primaryColor, fontSize: 14}}>... Read More</Text>
            </Text>
          }
          </View>
          <MainButton text="Log Experience" style={{padding: 10, marginTop: 25}} textStyle={{fontSize: 14}} />
        </View>

        <View style={{position: 'absolute', right: 30, top: (type !== 'product' ? 90 : 210)}}>
          <Text style={styles.reviewedText}>Reviewed on</Text>
          <Text style={styles.reviewedText}>11.12.18</Text>
        </View>
        <View style={styles.separator} />
        {/* END TOP SECTION */}


        {type === 'dispensary' && <View><StoreInfo product={product} /><View style={styles.separator}/></View>}
        <Effects type={type} effects={effects} disabled={true}/>
        <View style={styles.separator} />
        <Reviews product={product} navigation={this.props.navigation}/>        
        <View style={styles.separator} />
        <HorizontalPicsList product={product} navigation={this.props.navigation}/>
        <View style={styles.separator} />
        <HorizontalList title={listTitle} data={similar} headerColor={true} type={type} onPress={(product) =>{
          const setParamsAction = NavigationActions.setParams({
            params: { product, type },
            key: product.id
          });
          this.props.navigation.dispatch(setParamsAction);
        }
        }/>
        <View style={styles.separator} />
        <LookingForSomething />
        <View style={{height: 50}}/>

        </ScrollViewHeader>
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
  ({products, dispensaries}) => ({products, dispensaries})
)(SearchScreen);