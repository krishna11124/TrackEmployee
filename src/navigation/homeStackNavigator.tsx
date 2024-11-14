import React, { FC, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackProps } from "../@types";
import BottomStackNavigator from "./bottomTabNavigator";

const HomeStackNavigator: FC = () => {
  const HomeStack = createNativeStackNavigator<HomeStackProps>();
  const Stack = createNativeStackNavigator();
  return (
    <>
      <HomeStack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={BottomStackNavigator}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeStackNavigator;
