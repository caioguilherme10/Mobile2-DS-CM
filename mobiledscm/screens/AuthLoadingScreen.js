import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import auth from '@react-native-firebase/auth';

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      //const userToken = await AsyncStorage.getItem('userToken');
        let userToken = 'LC'
        await auth().onAuthStateChanged((user) => {
            if (user) {
                let email = user.email;
                let uid = user.uid;
                userToken = 'Tab'
            }else {
                userToken = 'LC'
            }
        })
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'Tab' : 'LC');
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
}

export default AuthLoadingScreen