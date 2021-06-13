import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import FormControl from "../components/FormControl";
import Button from "../components/Button";

const styles = StyleSheet.create({
	container: {
		height: Dimensions.get("window").height,
		padding: 30,
		justifyContent: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "700",
	},
});

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<View>
				<View style={{ marginBottom: 80 }}>
					<Text style={styles.title}>Hello.</Text>
					<Text style={styles.title}>Welcome back</Text>
				</View>
				<View>
					<FormControl label="Email, username or phone number" />
					<FormControl label="Password" secureTextEntry={true} />
				</View>
				<Text style={{ textAlign: "right", fontStyle: "italic" }}>
					Forgot password ?
				</Text>
				<Button>Click me</Button>
			</View>
		</View>
	);
}
