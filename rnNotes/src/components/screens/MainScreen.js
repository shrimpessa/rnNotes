import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export const MainScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()

    return(
        <View>
            <Text>MainScreen</Text>
            <Button 
                title="Go to note" 
                onPress={() => navigation.navigate('CreateNoteScreen')}
            />
        </View>
    )
}