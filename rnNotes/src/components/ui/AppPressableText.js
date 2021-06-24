import React from 'react';
import { Pressable } from 'react-native';

import { APP_COLORS } from '../APP_COLORS';
import { LAYOUT_BLANKS } from '../LAYOUT_BLANKS';
import { AppText } from './AppText'

export const AppPressableText = ({ onPress, onLongPress, content, description }) => {
    return (
        <Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? APP_COLORS.YELLOW : APP_COLORS.LIGTH_YELLOW,
					paddingLeft: LAYOUT_BLANKS.innerPadding,
					paddingVertical: LAYOUT_BLANKS.innerPadding,
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