import React, { useContext, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Switch,
  View,
} from "react-native";
import styles from "./myProfile.styles";
import { HomeStackProps } from "../../../@types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Button, TextView } from "../../../components";
import { UserData, UserDataContext } from "../../../context/userDataContext";
import { Colors } from "../../../constant";
import { Image } from "react-native";
import Icon from "../../../constant/Icon";
import { LocalStorage } from "../../../helpers/localstorage";
import { handleSignout } from "../../../helpers/helpers";
import Toast from "react-native-toast-message";

type MyProfileScreenNavigationType = NativeStackNavigationProp<
  HomeStackProps,
  "MyProfile"
>;

const MyProfile = () => {
  const navigation = useNavigation<MyProfileScreenNavigationType>();
  const { userData,setIsLoggedIn } = useContext<UserData>(UserDataContext);
  const { isDarkMode, setDarkmode } = useContext<UserData>(UserDataContext);
  const background =
    isDarkMode === "dark" ? Colors.PRIMARY[400] : Colors.PRIMARY[300];
  const textColor =
    isDarkMode === "dark" ? Colors.PRIMARY[300] : Colors.PRIMARY[400];
  const [isEnabled, setIsEnabled] = useState(
    isDarkMode === "dark" ? true : false
  );

  console.log("userData",userData);
  

  const changeTheme = async () => {
    setIsEnabled(!isEnabled);
    await LocalStorage.save("@dark", isEnabled ? "light" : "dark");
    setDarkmode(isEnabled ? "light" : "dark");
  };

  const signout = async () => {
    handleSignout(setIsLoggedIn);
    Toast.show({
      type: "success",
      text1: "Log Out Successfully!",
    });
  };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Information Container */}
      <View style={styles.informationContainer}>
        <View style={styles.screenTitleView}>
          <TextView style={[styles.screenTitleText, { color: textColor }]}>
            Home Page
          </TextView>
        </View>
        <View>
          <Button
            title={"Log Out"}
            style={styles.logOutButton}
            onPress={() => signout()}
          />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default MyProfile;
