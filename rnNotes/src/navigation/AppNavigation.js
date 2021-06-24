import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { MainScreen } from '../components/screens/MainScreen'
import { SignInScreen } from '../components/screens/SignInScreen'
import { CreateNoteScreen } from '../components/screens/CreateNoteScreen'
import { NotesList } from '../components/NotesList';

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
                name="CreateNoteScreen" 
                component={CreateNoteScreen} 
                options={{
                    title: "Добавить заметку"
                }}
            />
            <Stack.Screen 
                name="NotesList" 
                component={NotesList} 
                options={{
                    title: "Список заметок"
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