import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from '../screens/Login'
import CadastroScreen from '../screens/Cadastro'
import HomeScreen from '../screens/Home'
import ListUsuariosScreen from '../screens/ListUsuarios'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import EditUserScreen from '../screens/EditUser'
import TipoDeLoginScreen from '../screens/TipoDeLogin'
import LoginTelefoneScreen from '../screens/LoginTelefone'

const LCNavigator = createStackNavigator({
    TipoDeLogin: TipoDeLoginScreen,
    LoginTelefone: LoginTelefoneScreen,
    Login: LoginScreen,
    Cadastro: CadastroScreen
},{
  initialRouteName: 'TipoDeLogin',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#404040',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
    EditUser: EditUserScreen
},{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#404040',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Usuarios: ListUsuariosScreen,
},{
  tabBarOptions: {
    activeBackgroundColor: '#404040',
    activeTintColor: '#3399ff',
    inactiveTintColor: 'gray',
  }
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