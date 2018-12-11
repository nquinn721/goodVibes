import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import SvgUri from 'react-native-svg-uri';

class SearchHeader extends React.Component {
  state = {
    currentPage: 'dispensaries'
  }

  onPress(currentPage){
    const { onPress } = this.props;
    if(this.state.currentPage !== currentPage){
      this.setState({currentPage});
      onPress && onPress(currentPage);
    }


  }

  render() {
    return (
      <View>
        <Image source={require('goodVibes/assets/images/grey.jpg')} style={{height: 150}}/>
        <View style={styles.searchBox}>
          <SvgUri source={require('goodVibes/assets/images/Search_Nav.svg')} width={16} height={16} fill={Layout.thirdaryColor}/>
          <TextInput placeholder="Search Good Vibes" style={{fontFamily: 'circularbook', fontSize: 14, marginLeft: 10}}/>
        </View>
        <View style={styles.pageHeaders}>
          <View style={styles.links}>
            <View style={[styles.linkContainer, (this.state.currentPage === 'cannabis' && styles.selected)]}>
              <Text onPress={this.onPress.bind(this, 'cannabis')} style={[styles.link]}>Cannabis</Text>
            </View>
            <View style={[styles.linkContainer, (this.state.currentPage === 'dispensaries' && styles.selected)]}>
              <Text onPress={this.onPress.bind(this, 'dispensaries')} style={[styles.link]}>Dispensaries</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  searchBox: {
    borderRadius: 100,
    height: 35,
    borderWidth: 2,
    borderColor: Layout.primaryColor,
    alignSelf: 'center',
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -18,
    backgroundColor: 'white',
    marginBottom: -17,
    zIndex: 1
  },
  pageHeaders: {
    height: 65,
    backgroundColor: Layout.primaryColor,
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  link: {
    color: 'white',
    fontFamily: 'circularbold',
    fontSize: 16,
  },
  linkContainer: {
    paddingBottom: 5,
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: Layout.primaryColor
   },
   selected:{
    borderBottomColor: 'white'
   }
});



export default connect(
  // ({location}) => ({location})
)(SearchHeader);