import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: "#f1f1f1",
		paddingVertical: 9,
		paddingHorizontal: 20,
		borderColor: "darkgray",
		borderWidth: 1,
		borderRadius: 3,
		marginBottom: 20,
	},
});

export default function FormControl({ label, ...props }) {
	return (
		<View>
			<View style={styles.inputContainer}>
				<TextInput placeholder={label} {...props} />
			</View>
		</View>
	);
}
