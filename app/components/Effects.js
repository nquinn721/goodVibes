import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import SvgUri from 'react-native-svg-uri';
import Slider from 'goodVibes/components/generic/Slider';

/*
 * <Effects
 *    effects={Collection(text:value)}
 *    type={String}
 *    disabled={Boolean}
 */

export default class Effects extends React.Component{
  render(){
    const { effects=[], type, disabled } = this.props;

    return (
        <View style={[Layout.card, {padding: 30}]}>
          <Text style={{fontFamily: 'circularbook', color: Layout.secondaryColor, fontSize: 14}}>Effects</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: Layout.thirdaryColor, fontSize: 10}}>Based on 22 user logs</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                <SvgUri source={require('goodVibes/assets/images/Record.svg')} fill={Layout.primaryColor} />
                <Text style={{fontFamily: 'sfprobold', color: Layout.primaryColor}}> Record</Text>
              </View>
          </View>

          <View style={{padding: 40}}>
          {
            effects.map(({text, value}, i) => 
              <Slider key={i} text={text} disabled={disabled} value={value}/>
            )
          }
          </View>

          {type !== 'dispensary' && 
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
          }
        </View>
    )
  }


}



const styles = StyleSheet.create({
  
})


