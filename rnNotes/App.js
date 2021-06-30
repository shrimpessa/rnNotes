import React from 'react';
import { Provider } from 'mobx-react';
import { AppNavigation } from './src/navigation/AppNavigation';
import { notesStore } from './src/store/notesStore';
import { usersStore } from './src/store/usersStore';

export default function App() {

  const stores = { notesStore, usersStore }
  
  return(
    <Provider { ...stores }>
      <AppNavigation />
    </Provider>
  )
}