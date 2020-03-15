/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
 import RootNavigator from  '../CRM/RootController/RootNavigator'
 import {Provider} from 'react-redux'
 import { PersistGate } from 'redux-persist/lib/integration/react';
 import {store,persistor} from "./Container/store";
function App () {
  
    return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
         <RootNavigator/>
         </PersistGate>
         
      </Provider>
     
    );
  
}

export default App;
