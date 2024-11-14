import React, {FC, useContext} from 'react';
import {ScrollView, SafeAreaView, View, Pressable} from 'react-native';
import {AuthStackProps} from '../../../@types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextView} from '../../../components';
import {Image} from 'react-native';
//Style
import {Colors, Images} from '../../../constant';
import styles from './login.style';
import {UserData, UserDataContext} from '../../../context/userDataContext';

type LoginScreenNavigationType = NativeStackNavigationProp<
  AuthStackProps,
  'Login'
>;

const Login: FC = () => {
  const navigation = useNavigation<LoginScreenNavigationType>();
  const {isDarkMode, setUserData} = useContext<UserData>(UserDataContext);
  const background =
    isDarkMode === 'dark' ? Colors.PRIMARY[400] : Colors.PRIMARY[300];
  const textColor =
    isDarkMode === 'dark' ? Colors.PRIMARY[300] : Colors.PRIMARY[400];

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: background}]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {/* Information Container */}
        <View style={styles.informationContainer}>
          <View style={styles.screenTitleView}>
            <TextView style={[styles.screenTitleText, {color: textColor}]}>
              Login
            </TextView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
