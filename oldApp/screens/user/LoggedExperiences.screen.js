import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';

class LoggedExperiences extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {


    return(
      <View style={styles.container}>
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
  // (state) => ({}),
  // (dispatch) => (bindActionCreators({ completeOrder }, dispatch))
)(LoggedExperiences);
