import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { MainScreen } from '../components/screens/MainScreen'
import { SignInScreen } from '../components/screens/SignInScreen'
import { CreateNoteScreen } from '../components/screens/CreateNoteScreen'
import { NotesList } from '../components/NotesList';
import { Note } from '../components/Note';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const AppNavigation = () => {
    createHomeStack = () => (
        <Stack.Navigator>
            <Stack.Screen 
                name="MainScreen" 
                component={MainScreen} 
                options={{
                    title: "Мои заметки"
                }}
            />
            <Stack.Screen 
                name="NotesList" 
                component={NotesList} 
                options={{
                    title: "Список заметок"
                }}
            />
            <Stack.Screen 
                name="Note" 
                component={Note} 
                options={{
                    title: "Заметка"
                }}
            />
        </Stack.Navigator>
    )

    createNoteAddStack = () => (
        <Stack.Navigator>
            <Stack.Screen 
                name="Добавить заметку" 
                component={CreateNoteScreen} 
            />
            <Stack.Screen 
                name="NotesList" 
                component={NotesList} 
                options={{
                    title: "Список заметок"
                }}
            />
            <Stack.Screen 
                name="Note" 
                component={Note} 
                options={{
                    title: "Заметка"
                }}
            />
        </Stack.Navigator>
    )

    createLogInStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={SignInScreen} />
        </Stack.Navigator>
    ) 

    return(
        <NavigationContainer>        
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Main" 
                    children={createHomeStack}
                    options={{
                        title: "Мои заметки"
                    }}
                />
                <Drawer.Screen
                    name="СreateNote" 
                    children={createNoteAddStack} 
                    options={{
                        title: "Добавить заметку"
                    }}
                />
                <Drawer.Screen
                    name="LogIn" 
                    children={createLogInStack} 
                    options={{
                        title: "Войти"
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}