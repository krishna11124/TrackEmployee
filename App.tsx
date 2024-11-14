import React, {FC, useEffect} from 'react';
import {LogBox} from 'react-native';
import Route from './src/routes';
import {UserDataContextProvider} from './src/context';
import Toast from 'react-native-toast-message';
import {CommonLoaderProvider} from './src/components/CommonLoader/commonLoader';

const App: FC = () => {
  // Hiding warning logs - only used in debug mode
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  return (
    <>
      <UserDataContextProvider>
        <CommonLoaderProvider>
          <Route />
          <Toast />
        </CommonLoaderProvider>
      </UserDataContextProvider>
    </>
  );
};

export default App;
