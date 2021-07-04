import { Alert } from 'react-native';

export const AppAlert = ( header, text, actions, props ) => {
    Alert.alert(
        header, 
        text, 
        actions,
        props
    )
}