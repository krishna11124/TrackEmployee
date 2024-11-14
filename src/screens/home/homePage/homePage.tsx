import React, { useContext, useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Switch, View } from "react-native";
import styles from "./homePage.styles";
import { HomeStackProps } from "../../../@types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Button, TextView } from "../../../components";
import { handleSignout } from "../../../helpers/helpers";
import { UserData, UserDataContext } from "../../../context/userDataContext";
import Toast from "react-native-toast-message";
import { widthPercentageToDP as wp } from "../../../constant/dimentions";
import { LocalStorage } from "../../../helpers/localstorage";
import { Colors, Typography } from "../../../constant";

type HomePageScreenNavigationType = NativeStackNavigationProp<
  HomeStackProps,
  "HomePage"
>;

const HomePage = () => {
  const navigation = useNavigation<HomePageScreenNavigationType>();
  const { setIsLoggedIn, userData } = useContext<UserData>(UserDataContext);

  const signout = async () => {
    handleSignout(setIsLoggedIn);
    Toast.show({
      type: "success",
      text1: "Log Out Successfully!",
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Information Container */}
        <View style={styles.informationContainer}>
          <View style={styles.screenTitleView}>
            <TextView style={[styles.screenTitleText]}>Home Page</TextView>
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

export default HomePage;
