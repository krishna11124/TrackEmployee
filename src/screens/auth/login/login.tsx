import React, { FC, useContext, useState } from "react";
import { ScrollView, SafeAreaView, View, Image } from "react-native";
import { AuthStackProps } from "../../../@types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, InputText, TextView } from "../../../components";
//Style
import styles from "./login.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../../constant/dimentions";
import { Colors, Images, Typography } from "../../../constant";
import { LoginValidationSchema } from "../../../helpers/validations";
import { useFormik } from "formik";
import { LocalStorage } from "../../../helpers/localstorage";
import { UserData, UserDataContext } from "../../../context/userDataContext";

type LoginScreenNavigationType = NativeStackNavigationProp<
  AuthStackProps,
  "Login"
>;

const Login: FC = () => {
  const navigation = useNavigation<LoginScreenNavigationType>();
  const [isSecure, setIsSecure] = useState<boolean>(true);
  const { userData, setUserData, setIsLoggedIn } =
    useContext<UserData>(UserDataContext);
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    validationSchema: LoginValidationSchema,
    initialValues: {
      email: "test@gmail.com",
      password: "12345",
    },
    onSubmit: async (data: any) => {
      await LocalStorage.save("@user", data);
      setUserData(userData);
      await LocalStorage.save("@login", JSON.stringify(true));
      setIsLoggedIn(true);
    },
  });

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
              source={Images.img_login}
              style={{ width: wp(90), height: hp(30), resizeMode: "contain" }}
            />
          </View>
          <View
            style={{
              padding: hp(2),
              marginTop: hp(5),
            }}
          >
            <TextView
              style={{
                ...Typography.H4Semibold20,
                color: Colors.PRIMARY[400],
              }}
            >
              Log in with your credentials
            </TextView>
            <TextView
              style={{
                ...Typography.H5Medium16,
                color: Colors.FLOATINGINPUT[100],
                marginTop: hp(3),
              }}
            >
              Login to enjoying app!
            </TextView>
            <View style={styles.inputView}>
              <View>
                <InputText
                  value={values?.email}
                  //@ts-ignore
                  inputStyle={[styles.input]}
                  keyboardType="default"
                  placeHolderTextStyle={Colors.FLOATINGINPUT[100]}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  error={errors.email}
                  touched={touched.email}
                />
              </View>
              <View>
                <InputText
                  value={values?.password}
                  //@ts-ignore
                  inputStyle={[styles.input]}
                  keyboardType="default"
                  placeHolderTextStyle={Colors.FLOATINGINPUT[100]}
                  placeholder="Password"
                  isSecure={isSecure}
                  onSecureTextPress={() => setIsSecure(!isSecure)}
                  onChangeText={handleChange("password")}
                  error={errors.password}
                  touched={touched.password}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.actionButton}>
          <Button
            title={"Login"}
            style={styles.countinueButton}
            onPress={() => handleSubmit()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
