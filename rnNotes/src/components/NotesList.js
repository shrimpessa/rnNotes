import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export const NotesList = () => {

    const navigation = useNavigation()
    const route = useRoute()

    return(
        <View>
            <Text>NotesList</Text>
            <Text>NotesList</Text>
            <Text>NotesList</Text>
        </View>
    )
}