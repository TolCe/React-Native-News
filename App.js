import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './tab_screen/Home';
import Business from './tab_screen/Business';
import Entertainment from './tab_screen/Entertainment';
import Health from './tab_screen/Health';
import Science from './tab_screen/Science';
import Sports from './tab_screen/Sports';
import Technology from './tab_screen/Technology';

// product start
import Details from './screens/Details';
const headlineStack = createStackNavigator({
  home: Home,
  details: Details,
})
const businessStack = createStackNavigator({
  business: Business,
  details: Details,
})
const entertainmentStack = createStackNavigator({
  entertainment: Entertainment,
  details: Details,
})
const healthStack = createStackNavigator({
  health: Health,
  details: Details,
})
const scienceStack = createStackNavigator({
  science: Science,
  details: Details,
})
const sportsStack = createStackNavigator({
  sports: Sports,
  details: Details,
})
const technologyStack = createStackNavigator({
  technology: Technology,
  details: Details,
})
// product end

const TabNavigator = createBottomTabNavigator({
  home: {
    screen: headlineStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 12, color: '#ffffff', textAlign: "center" }}> Başlıklar </Text>,
      tabBarIcon: () => (
        <Icon name="newspaper" color={"white"} size={25} />
      )
    }
  },
  business: {
    screen: businessStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 12, color: '#ffffff', textAlign: "center" }}> İş </Text>,
      tabBarIcon: () => (
        <Icon name="business-time" color={"white"} size={25} />
      )
    }
  },
  entertainment: {
    screen: entertainmentStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 12, color: '#ffffff', textAlign: "center" }}> Eğlence </Text>,
      tabBarIcon: () => (
        <Icon name="book" color={"white"} size={25} />
      )
    }
  },
  health: {
    screen: healthStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 12, color: '#ffffff', textAlign: "center" }}> Sağlık </Text>,
      tabBarIcon: () => (
        <Icon name="weight" color={"white"} size={25} />
      )
    }
  },
  science: {
    screen: scienceStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 12, color: '#ffffff', textAlign: "center" }}> Bilim </Text>,
      tabBarIcon: () => (
        <Icon name="vial" color={"white"} size={25} />
      )
    }
  },
  sports: {
    screen: sportsStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 12, color: '#ffffff', textAlign: "center" }}> Spor </Text>,
      tabBarIcon: () => (
        <Icon name="futbol" color={"white"} size={25} />
      )
    }
  },
  technology: {
    screen: technologyStack,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 12, color: '#ffffff', textAlign: "center" }}> Teknoloji </Text>,
      tabBarIcon: () => (
        <Icon name="microchip" color={"white"} size={25} />
      )
    }
  }
},
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#1e355c',
        height: 75,
      }
    }
  }
);

export default createAppContainer(TabNavigator);