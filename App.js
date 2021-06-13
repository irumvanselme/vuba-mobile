import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import LoginScreen from "./screens/auth/Login";
import RegisterScreen from "./screens/auth/Register";

export default function App() {
	return (
		<View style={styles.container}>
			<RegisterScreen />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
