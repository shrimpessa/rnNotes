import { Alert } from 'react-native';

export const AppAlert = ( header, text ) => {
    Alert.alert(
        header, 
        text
    )
}