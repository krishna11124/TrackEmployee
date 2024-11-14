import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding, Login} from '../screens';
import {AuthStackProps} from '../@types';

const AuthStackNavigator: FC = () => {
  const AuthStack = createNativeStackNavigator<AuthStackProps>();

  return (
    <>
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        {/* <AuthStack.Screen name="OnBoarding" component={OnBoarding} /> */}
        <AuthStack.Screen name="Login" component={Login} />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthStackNavigator;
