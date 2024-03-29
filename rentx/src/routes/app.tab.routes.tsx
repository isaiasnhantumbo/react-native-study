import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components";

import CarSvg from '../assets/car.svg';
import HomeSvg from '../assets/home.svg';
import PeopleSvg from '../assets/people.svg';
import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { StackRoutes } from "./app.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{
        headerShown: false,  
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.background_primary,
        }
      }}>
      <Screen
        name="TabHome"
        component={StackRoutes}
        options={{tabBarIcon: ({ color }) => ( <HomeSvg fill={color} height={24} width={24} /> )}}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{tabBarIcon: ({ color }) => ( <PeopleSvg fill={color} height={24} width={24} /> )}}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{tabBarIcon: ({ color }) => ( <CarSvg fill={color} height={24} width={24} /> )}}
      />
    </Navigator>
  );
};
