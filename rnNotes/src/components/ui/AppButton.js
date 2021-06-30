import React from 'react';
import { 
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';
import { APP_COLORS } from '../constants/APP_COLORS';
import { LAYOUT_BLANKS } from '../constants/LAYOUT_BLANKS';
import { AppText } from './AppText';

export const AppButton = props => {

    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    const styles = StyleSheet.create({
        button: {
            paddingVertical: LAYOUT_BLANKS.paddingVertical,
            paddingHorizontal: LAYOUT_BLANKS.paddingHorizontal,
            borderRadius: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: props.btnWidth
        },
        text: {
            fontWeight: '600',
            fontSize: 14,
            color: APP_COLORS.WHITE,
            padding: 2,
            textAlign: 'center'
        }
    })

    return(
        <Wrapper onPress={props.onPress} activeOpacity={0.7} >
            <View style={{ 
                ...styles.button, 
                backgroundColor: props.color ? props.color : APP_COLORS.BROWN 
            }}>
                <AppText style={styles.text}>{props.children}</AppText>
            </View>
        </Wrapper>
    )
}

