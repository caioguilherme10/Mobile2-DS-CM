import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const Cadastro = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Cadastro</Text>
            <Button title="Login" onPress={()=> {
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

export default Cadastro