import React from 'react';
import { Pressable } from 'react-native';

import { APP_COLORS } from '../APP_COLORS';
import { AppText } from './AppText'

export const AppPressableText = ({ onPress, onLongPress, content, description }) => {
    return (
        <Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? APP_COLORS.ORANGE : APP_COLORS.LIGHT_ORANGE,
					paddingLeft: 16,
					paddingVertical: 16,
					alignContent: 'center',
					justifyContent: 'center'
				}
			]}
		>
			<AppText style={{ fontSize: 18 }}>{content}</AppText>
			<AppText>{description}</AppText>
		</Pressable >
    )
}