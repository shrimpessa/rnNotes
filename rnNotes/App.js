import React, { useEffect } from 'react';
import { Provider } from 'mobx-react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppNavigation } from './src/navigation/AppNavigation';
import { notesStore } from './src/store/notesStore';
import { usersStore } from './src/store/usersStore';

export default function App() {

  const stores = { notesStore, usersStore }

  const storeToken = async () => {
    try {
      await AsyncStorage.setItem('@token', '')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    storeToken()
  }, [])
  
  return(
    <Provider { ...stores }>
      <AppNavigation />
    </Provider>
  )
}