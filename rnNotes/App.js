import React from 'react';
import { View, Text} from 'react-native'

import { MainScreen } from './src/components/screens/MainScreen';
import { CreateNoteScreen } from './src/components/screens/CreateNoteScreen';
import { NotesList } from './src/components/NotesList';
import { AppNavigation } from './src/navigation/AppNavigation';

export default function App() {

  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Мои заметки" component={MainScreen} />
      <Stack.Screen name="Создать" component={CreateNoteScreen} />
    </Stack.Navigator>
  )

  createNoteAddStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Добавить заметку" component={CreateNoteScreen} />
    </Stack.Navigator>
  )
  
  return(
    <AppNavigation />
  )
}