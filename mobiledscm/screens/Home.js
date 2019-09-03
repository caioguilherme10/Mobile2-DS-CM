import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

import firebase from 'react-native-firebase'

const Home = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Home</Text>
            <Button title="Sair" onPress={()=> {
                firebase.auth().signOut()
                props.navigation.navigate('Login')
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home