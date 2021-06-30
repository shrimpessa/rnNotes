import React from 'react';
import { Provider } from 'mobx-react';
import { AppNavigation } from './src/navigation/AppNavigation';
import { notesStore } from './src/store/notesStore';

export default function App() {

  const stores = { notesStore }
  
  return(
    <Provider { ...stores }>
      <AppNavigation />
    </Provider>
  )
}