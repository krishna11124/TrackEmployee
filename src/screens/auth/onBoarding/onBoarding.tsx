import React, { FC, useContext } from "react";
import { ScrollView, SafeAreaView, View, Pressable } from "react-native";
import { AuthStackProps } from "../../../@types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, TextView } from "../../../components";
import { Image } from "react-native";
//Style
import { Colors, Images, Typography } from "../../../constant";
import styles from "./onBoarding.style";
import { UserData, UserDataContext } from "../../../context/userDataContext";
import Toast from "react-native-toast-message";
import { LocalStorage } from "../../../helpers/localstorage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../../constant/dimentions";

type OnBoardingScreenNavigationType = NativeStackNavigationProp<
  AuthStackProps,
  "OnBoarding"
>;

const OnBoarding: FC = () => {
  const navigation = useNavigation<OnBoardingScreenNavigationType>();

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Information Container */}
        <View style={styles.informationContainer}>
          <View>
            <Image
              source={Images.img_onboarding}
              style={{ width: wp(90), height: hp(30), resizeMode: "contain" }}
            />
          </View>
          <View
            style={{
              padding: hp(2),
              justifyContent: "center",
              alignItems: "center",
              marginTop: hp(5),
            }}
          >
            <TextView
              style={{
                ...Typography.H4Semibold20,
                color: Colors.PRIMARY[400],
                textAlign: "center",
              }}
            >
              Welcome To Track Employee
            </TextView>
            <TextView
              style={{
                ...Typography.H5Medium16,
                color: Colors.FLOATINGINPUT[100],
                marginTop: hp(3),
                textAlign: "center",
              }}
            >
              The smartest way to track your employees.
            </TextView>
          </View>
        </View>
        <View style={styles.actionButton}>
          <Button
            title={"Continue"}
            style={styles.countinueButton}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoarding;
