import React from 'react';
import { 
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';
import { APP_COLORS } from '../APP_COLORS';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';
import { AppText } from './AppText';

export const AppButton = ({ children, onPress, color=APP_COLORS.ORANGE }) => {

    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return(
        <Wrapper onPress={onPress} activeOpacity={0.7} >
            <View style={{ ...styles.button, backgroundColor: color }}>
                <AppText style={styles.text}>{children}</AppText>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: LAYOUT_BLANKS.paddingVertical,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
        color: APP_COLORS.WHITE,
        padding: 2,
        textAlign: 'center'
    }
})