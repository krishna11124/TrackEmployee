import React, { FC, useContext, useEffect, useRef, useState } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigator, AuthStackNavigator } from "../navigation";
import { Platform, StatusBar, useColorScheme } from "react-native";
const Stack = createNativeStackNavigator();
import { LocalStorage } from "../helpers/localstorage";
import { UserData, UserDataContext } from "../context/userDataContext";
import { Colors } from "../constant";
import Toast from "react-native-toast-message";
import { PERMISSIONS, RESULTS, request } from "react-native-permissions";
const Route: FC = () => {
  const [userLogin, setUserLogin] = useState<any>(undefined);
  const { isLoggedIn } = useContext<UserData>(UserDataContext);
  const theme = useColorScheme();
  useEffect(() => {
    getAsync();
  }, [isLoggedIn]);

  const getAsync = async () => {
    try {
      let val = await LocalStorage.read("@login");
      setUserLogin(val);
    } catch (error) {
      console.error("Error fetching user login status:", error);
      setUserLogin("false");
    }
  };

  // //For Real Device only
  // useEffect(() => {
  //   initializeFCM();
  // }, []);

  // const initializeFCM = async () => {
  //   const hasPermission = await requestUserPermission();
  //   if (hasPermission) {
  //     try {
  //       const token = await messaging().getToken();
  //       console.log("tokentoken", token);

  //       if (token) {
  //         await LocalStorage.save("@fcmToken", token);
  //       } else {
  //         Toast.show({
  //           type: "error",
  //           text1: "Please enable notification permission from app setting!",
  //         });
  //       }
  //     } catch (error) {
  //       console.log("errorerror", error);
  //       Toast.show({
  //         type: "error",
  //         text1: "Please enable notification permission from app setting!",
  //       });
  //     }
  //   } else {
  //     Toast.show({
  //       type: "error",
  //       text1: "Please enable notification permission from app setting!",
  //     });
  //   }
  // };

  // const requestUserPermission = async () => {
  //   try {
  //     if (Platform.OS === "android" && Platform.Version >= 33) {
  //       const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
  //       if (result === RESULTS.GRANTED) {
  //         return true;
  //       } else {
  //         Toast.show({
  //           type: "error",
  //           text1: "Please enable notification permission from app setting!",
  //         });
  //       }
  //     } else {
  //       const authStatus = await messaging().requestPermission();
  //       return (
  //         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //         authStatus === messaging.AuthorizationStatus.PROVISIONAL
  //       );
  //     }
  //   } catch (error) {
  //     Toast.show({
  //       type: "error",
  //       text1: "Please enable notification permission from app setting!",
  //     });
  //     return false;
  //   }
  // };

  //removed loading authscreen in first instance because of the null(false) for userLogin
  if (userLogin === undefined || userLogin === "null") return <></>;
  //
  
  return (
    <>
      <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar
          barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
          backgroundColor={Colors.PRIMARY[100]}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {userLogin ? (
            <>
              <Stack.Screen
                name="HomeStackNavigator"
                component={HomeStackNavigator}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="AuthStackNavigator"
                component={AuthStackNavigator}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default Route;
