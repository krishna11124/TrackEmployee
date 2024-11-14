import React, { FC, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../screens";
import { Colors, Typography } from "../constant";
import Icon from "../constant/Icon";
import { UserData, UserDataContext } from "../context/userDataContext";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const HomePageStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomePage" component={HomePage} />
  </Stack.Navigator>
);

const ProfilePageStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomePage" component={HomePage} />
  </Stack.Navigator>
);

const BottomStackNavigator: FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.PRIMARY[300],
          borderTopColor: "transparent",
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          ...Typography.BodyRegular14,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePageStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              family="Entypo"
              name="home"
              color={focused ? Colors.PRIMARY[100] : Colors.FLOATINGINPUT[100]}
              size={22}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePageStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              family="FontAwesome"
              name="user"
              color={focused ? Colors.PRIMARY[100] : Colors.FLOATINGINPUT[100]}
              size={22}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStackNavigator;
