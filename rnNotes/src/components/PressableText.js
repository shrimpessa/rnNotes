import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

import { APP_COLORS } from './APP_COLORS';
import { LAYOUT_BLANKS } from './LAYOUT_BLANKS';
import { AppText } from '../components/ui/AppText'

export const PressableText = ({ onPress, onLongPress, content, description }) => {
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
					justifyContent: 'center',
					borderRadius: LAYOUT_BLANKS.borderRadius
				}
			]}
		>
			<AppText style={styles.content}>{content}</AppText>
			<View style={styles.description}>
				<AppText 
					style={{ 
						paddingHorizontal: LAYOUT_BLANKS.paddingHorizontal,
						paddingVertical: LAYOUT_BLANKS.paddingVertical
					}}
				>
					{description}
				</AppText>
			</View>
		</Pressable>
    )
}

const styles = StyleSheet.create({
	content: {
		fontSize: 18, 
		fontWeight: '500'
	},
	description: {
		marginTop: LAYOUT_BLANKS.outerPadding, 
		borderRadius: LAYOUT_BLANKS.borderRadius, 
		backgroundColor: APP_COLORS.WOODEN, 
		marginRight: LAYOUT_BLANKS.innerPadding
	}
})