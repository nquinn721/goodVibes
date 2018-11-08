import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MapView, Constants, Location, Permissions, Marker } from 'expo';


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
		this.setState({ location });
	};

	render() {
		const coords = this.state.location ? this.state.location.coords : { latitude: 37.78825, longitude: -122.4324};
		this.state.markers.push({latlng: coords, title: 'Home', description: 'This is where you live'})
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
      		{this.state.markers.map((marker, i) => {
      			console.log(marker);
      			return (
	      		    <Marker
	      		      key={i}
	      		      coordinate={marker.latlng}
	      		      title={marker.title}
	      		      description={marker.description}
	      		    />
      			)
      		  })}
      		</MapView>
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
)(DispensaryMap);