import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import AppNavigator from 'goodVibes/navigation/AppNavigator';
import Global from 'goodVibes/constants/Global';

class IndexScreen extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
});



export default connect(
)(IndexScreen);