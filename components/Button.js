import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
        fontSize: 17,
        fontWeight: "700",
        textTransform: "uppercase"
    }
})

export default ({ children }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};
