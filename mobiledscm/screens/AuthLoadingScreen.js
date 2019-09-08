import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  Text
} from 'react-native';

import auth from '@react-native-firebase/auth';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { addAuthUserFirebase , getToken } from '../store/actions/index'

class AuthLoadingScreen extends React.Component {

  constructor(props) {
    super(props)
  }

    componentDidMount() {
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      //const userToken = await AsyncStorage.getItem('userToken');
        //let userToken = 'LC'
        await auth().onAuthStateChanged((user) => {
            if (user) {
                let email = user.email;
                let uid = user.uid;
                let userToken2 = 'Tab'
                this.props.addAuthUserFirebase(uid,email,userToken2)
                this.props.getToken(uid)
                //userToken = 'Tab'
            }else {
                let email = '';
                let uid = '';
                let userToken2 = 'LC'
                //userToken = 'LC'
                this.props.addAuthUserFirebase(uid,email,userToken2)
            }
        })
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(this.props.auth.userToken ? 'Tab' : 'LC');
      //this.props.navigation.navigate(userToken ? 'Tab' : 'LC');
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

const MapStateToProps = state => ({ auth: state.auth })

const MapDispatchToProps = dispatch => bindActionCreators({ addAuthUserFirebase , getToken }, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(AuthLoadingScreen)