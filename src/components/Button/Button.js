import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ onPress = () => {}, btnText = '', btnTextStyle = {}, btnStyle = {} }) => {
	return (
		<TouchableOpacity style={{ ...styles.btnStyle, ...btnStyle }} activeOpacity={0.8} onPress={onPress}>
			<Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>{btnText}</Text>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	btnStyle: {
		backgroundColor: 'purple',
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 16,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5
	},
	btnTextStyle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
		textTransform: 'uppercase'
	}
});
export default Button;
