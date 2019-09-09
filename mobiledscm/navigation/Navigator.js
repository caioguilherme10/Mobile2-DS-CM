import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from '../screens/Login'
import CadastroScreen from '../screens/Cadastro'
import HomeScreen from '../screens/Home'
import ListUsuariosScreen from '../screens/ListUsuarios'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import EditUserScreen from '../screens/EditUser'

const LCNavigator = createStackNavigator({
    Login: LoginScreen,
    Cadastro: CadastroScreen
})

const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
    EditUser: EditUserScreen
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    ListUsuarios: ListUsuariosScreen,
});


export default createAppContainer(
    createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      LC: LCNavigator,
      Tab: TabNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
    )
)