import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MapView, Location, Permissions } from 'expo';
import { getLocalDispensaries } from 'goodVibes/redux/actions/dispensary.action';
import { bindActionCreators } from 'redux';
import HorizontalScrollCards from 'goodVibes/components/HorizontalScrollCards';


class DispensaryMap extends React.Component{
	static navigationOptions = {
		title: null,  
	};

	state = {
		location: null,
		errorMessage: null,
		markers: []
	};

	componentWillMount(){
		this._getLocationAsync();
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
		  this.setState({
		    errorMessage: 'Permission to access location was denied',
		  });
		}

		let location = await Location.getCurrentPositionAsync({});
		this.props.getLocalDispensaries(location.coords.latitude, location.coords.longitude);

		// this.setState({ location });
	};

	render() {
 		const coords = this.state.location ? this.state.location.coords : { latitude: 37.78825, longitude: -122.4324};
		const marker = {latlng: coords, title: 'Home', description: 'This is where you live'}


		const markers = this.props.dispensaries.dispensariesFromYelp;
	    return (
	      <View style={styles.container}>
	      <MapView
		        style={{ flex: 1 }}
		        initialRegion={{
		          latitude: 37.78825,
		          longitude: -122.4324,
		          latitudeDelta: 0.0922,
		          longitudeDelta: 0.0421,
		        }}
		        region={{
	        	  latitudeDelta: 0.0922,
		          longitudeDelta: 0.0421, 
		          ...coords
		      	}}
      		>
					{
						markers && markers.map((d, i) => (<MapView.Marker
							coordinate={d.coordinates}
							key={i}
							title={d.name}
						/>))
					}
	      		    
      		</MapView>
					{ markers && <HorizontalScrollCards data={markers} onPress={d => console.log(d)}/> }
	      </View>
	    );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
});

export default connect(
	({dispensaries}) => ({dispensaries}),
	(dispatch) => (bindActionCreators({ getLocalDispensaries }, dispatch))
)(DispensaryMap);