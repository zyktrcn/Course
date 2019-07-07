/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StackNavigator} from 'react-navigation'

import Welcome from './components/Welcome'
import Login from './components/Login'
import CourseDetail from './components/CourseDetail'
import { AppNavigator } from './components/TabNavigation'

const App = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: ({navigation}) => ({header: null})
  },
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({header: null})
  },
  Main: {
    screen: AppNavigator
  },
  CourseDetail: {
    screen: CourseDetail
  }
}, {
  initialRouteName: 'Welcome',
  headerMode: 'screen'
})

export default App
