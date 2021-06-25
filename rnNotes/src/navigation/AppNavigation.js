import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

import { MainScreen } from '../components/screens/MainScreen'
import { SignInScreen } from '../components/screens/SignInScreen'
import { CreateNoteScreen } from '../components/screens/CreateNoteScreen'
import { NotesList } from '../components/NotesList';
import { Note } from '../components/Note';
import { APP_COLORS } from '../components/APP_COLORS';
import { LAYOUT_BLANKS } from '../components/LAYOUT_BLANKS';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const AppNavigation = ({ navigation }) => {
    createHomeStack = () => (
        <Stack.Navigator>
            <Stack.Screen 
                name="MainScreen" 
                component={MainScreen} 
                options={({route, navigation}) => ({
                    title: "Мои заметки",
                    headerRight: () => (
                        <Icon 
                            name="add-circle-outline" 
                            size={30} 
                            color={APP_COLORS.BROWN} 
                            style={{
                                paddingRight: LAYOUT_BLANKS.outerPadding
                            }}
                            onPress={() => navigation.navigate('CreateNote')}
                        />
                     )
                   }
                )}
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
            <Stack.Screen 
                name="CreateNote" 
                component={CreateNoteScreen} 
                options={{
                    title: "Добавить заметку"
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
                        title: "Мои заметки",
                        // headerRight: () => (
                        //     <Icon name="home" size={30} color="#900" />
                        // )
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