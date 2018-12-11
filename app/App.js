import React from 'react';
import { Platform, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import store from './redux/store';
import IndexScreen from './screens';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <SafeAreaView style={[styles.container]}>
            <IndexScreen />
          </SafeAreaView>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        sfpro: require('./assets/fonts/SF_Pro/SF-Pro-Display-Regular.otf'),
        sfprobold: require('./assets/fonts/SF_Pro/SF-Pro-Display-Semibold.otf'),
        sfpromedium: require('./assets/fonts/SF_Pro/SF-Pro-Display-Medium.otf'),
        sfprolight: require('./assets/fonts/SF_Pro/SF-Pro-Display-Light.otf'),
        sfproitalic: require('./assets/fonts/SF_Pro/SF-Pro-Text-LightItalic.otf'),
        circular: require('./assets/fonts/circular/CircularStd-Medium.otf'),
        circularbook: require('./assets/fonts/circular/CircularStd-Book.otf'),
        circularbold: require('./assets/fonts/circular/CircularStd-Bold.otf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
});
