import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root} from 'native-base'

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from "react-navigation-drawer"
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from "react-navigation-stack"

import Home from './screens/users/Home'
import Signin from './screens/auth/Signin'
import Signup from './screens/auth/Signup'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }


  render(){

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    const AppAuthStack=createStackNavigator({
      Signin:{
        screen: Signin,
      },
      Signup:{
        screen:Signup
      }
    },{
      defaultNavigationOptions:{
        header:null
      }
    })

    const AppContainer=createAppContainer(AppAuthStack)

    return(
    
    <Root>
      <AppContainer></AppContainer>
      </Root>)
  }
}

