import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigator from './src/navigation/RootNavigator';
import store, {persistor} from './src/store';
import LoadingScreen from './src/views/LoadingScreen/LoadingScreen';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <MenuProvider>
          <RootNavigator />
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
