import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import AppNavigator from 'goodVibes/navigation/AppNavigator';
import Global from 'goodVibes/constants/Global';
import { bindActionCreators } from 'redux';
import { getData } from 'goodVibes/redux/actions/data';
console.log(getData);
class IndexScreen extends React.Component {
	componentDidMount(){
		this.props.getData();
	}
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
});



export default connect(
	(state) => ({}),
	(dispatch) => bindActionCreators({ getData }, dispatch)
)(IndexScreen);