import React, {FC, useContext} from 'react';
import {ScrollView, SafeAreaView, View, Pressable} from 'react-native';
import {AuthStackProps} from '../../../@types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextView} from '../../../components';
import {Image} from 'react-native';
//Style
import {Colors, Images} from '../../../constant';
import styles from './onBoarding.style';
import {UserData, UserDataContext} from '../../../context/userDataContext';
import Toast from 'react-native-toast-message';
import {LocalStorage} from '../../../helpers/localstorage';

type OnBoardingScreenNavigationType = NativeStackNavigationProp<
  AuthStackProps,
  'OnBoarding'
>;

const OnBoarding: FC = () => {
  const navigation = useNavigation<OnBoardingScreenNavigationType>();
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
              OnBoarding
            </TextView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoarding;
