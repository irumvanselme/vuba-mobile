import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "dodgerblue",
        paddingVertical: 10,
        marginTop: 40,
        borderRadius: 3,
        elevation: 10,
    },
    text: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    }
})

export default ({ children }) => {
    return (
        <TouchableHighlight style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </TouchableHighlight>
    );
};
