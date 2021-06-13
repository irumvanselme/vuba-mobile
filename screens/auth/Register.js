import React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FormControl from "../../components/FormControl";
import Button from "../../components/Button";

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        padding: 30,
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
    }
});

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <View>
                <View style={{ marginBottom: 80 }}>
                    <Text style={styles.title}>Hello.</Text>
                    <Text style={styles.title}>Happy to see you</Text>
                </View>
                <View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ flex: 1, marginRight: 5 }}><FormControl label="First name"/></View>
                        <View style={{ flex: 1, marginLeft: 5 }}><FormControl label="Last name"/></View>
                    </View>
                    <FormControl label="Email"/>
                    <FormControl label="Username"/>
                    <FormControl label="Mobile phone"/>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={{ flex: 1, marginRight: 5 }}><FormControl label="Password" secureTextEntry={true}/></View>
                        <View style={{ flex: 1, marginLeft: 5 }}><FormControl label="Confirm password"
                                                                              secureTextEntry={true}/></View>
                    </View>
                </View>
                <Button>register</Button>
            </View>
        </View>
    )
}