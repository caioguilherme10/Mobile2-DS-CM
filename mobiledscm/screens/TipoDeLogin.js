import React from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'

const TipoDeLogin = (props) => {

    return (
        <View style={styles.screen}>
            <View style={styles.login}>
                <Text style={styles.text}>Selecione o mode de Login: </Text>
                <View style={styles.vbutton}>
                    <View style={styles.button}>
                        <Button title="Login via Email" onPress={()=> {
                            props.navigation.navigate('Login')
                        }}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Login via Telefone" onPress={()=> {
                            props.navigation.navigate('LoginTelefone')
                        }}/>
                    </View>
                </View>
            </View>
            <View style={styles.cadastro}>
                <Button title="Cadastro" onPress={()=> {
                    props.navigation.navigate('Cadastro')
                }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    login: {
        margin: 10,
    },
    cadastro: {
        margin: 10,
    },
    text: {
        color: '#FFFFFF',
        margin: 10,
        marginLeft: 20
    },
    vbutton: {
        margin: 10,
        flexDirection: 'row'
    },
    button: {
        margin: 10
    }
})

export default TipoDeLogin