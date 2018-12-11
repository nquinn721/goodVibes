import React from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import Header from 'goodVibes/components/Header';
import Lightbox from 'react-native-lightbox';
import LikeButton from 'goodVibes/components/generic/LikeButton';

class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    const product = this.props.navigation.getParam('product');
    let images = product.images || product.photos || [];

    images = images.concat(images).concat(images);
    
    return (
      <View style={Layout.card}>
        <Header short={true} navigation={this.props.navigation} showTitle={true} title={product.name} rightIcon="camera"/>
        <ScrollView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {
              images.map((v, i) => (
                <Lightbox 
                    navigator={this.props.navigator} 
                    key={i} 
                    style={styles.image} 
                    renderHeader={(close) => 
                      <Header 
                          short={true} 
                          navigation={this.props.navigation} 
                          showTitle={true} title={product.name} 
                          rightIcon="camera" 
                          style={{backgroundColor: 'black'}}
                          back={close}/>
                      }
                    renderContent={() => 
                      <View>
                        <Image source={{uri: v}} style={{height: 300}}/>
                        <View style={{justifyConent: 'flex-end', alignItems: 'flex-end', paddingRight: 20, marginTop: 20}}>
                          <LikeButton totalLikes={1} showLikes={true}/>
                        </View>
                      </View>
                    }
                  >
                    <Image source={{uri: v}} style={styles.image}/>
                </Lightbox>
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
    image: {
       width: Layout.window.width / 2, 
       height: Layout.window.width / 2,
    }
});



export default connect(
  ({products}) => ({products})
)(SearchScreen);