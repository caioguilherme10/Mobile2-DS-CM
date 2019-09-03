import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from '../screens/Login'
import CadastroScreen from '../screens/Cadastro'
import HomeScreen from '../screens/Home'
import ListUsuariosScreen from '../screens/ListUsuarios'

const LCNavigator = createStackNavigator({
    Login: LoginScreen,
    Cadastro: CadastroScreen
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    ListUsuarios: ListUsuariosScreen,
});

/* const MainNavigator = createStackNavigator({
    LCNavigator: LCNavigator,
    TabNavigator: TabNavigator
}) */

export default createAppContainer(
    createSwitchNavigator(
    {
      LC: LCNavigator,
      Tab: TabNavigator,
    },
    {
      initialRouteName: 'LC',
    }
    )
)