import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { FontAwesome } from '@expo/vector-icons'
import {
  HomeScreen,
  MusicScreen,
  BookmarksScreen,
  ProfileScreen
} from '../Screens'
import MainTabButton from '../Components/MainTabButton'
import colors from '../utils/colors'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome name='home' size={24} color={colors.primary} />
      }
    },
    Inbox: {
      screen: MusicScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome name='music' size={24} color={colors.primary} />
        )
      }
    },
    Main: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <MainTabButton />
      }
    },
    Bookmarks: {
      screen: BookmarksScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome name='bookmark' size={24} color={colors.primary} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome name='user' size={24} color={colors.primary} />
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: colors.tab
      }
    }
  }
)

export default TabNavigator
