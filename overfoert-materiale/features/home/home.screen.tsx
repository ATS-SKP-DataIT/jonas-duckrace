import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HomeScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#006600", fontSize: 40 }}>Aarhus Duck Race</Text>
            <Text style={{ color: "#006600", fontSize: 40 }}>Plaque</Text>
            <Text style={{ color: "#006600", fontSize: 40 }}>Countdown</Text>
            <Text style={{ color: "#006600", fontSize: 40 }}>Shop</Text>
            <Text style={{ color: "#006600", fontSize: 40 }}>Donate</Text>
            <View style={styles.container}>
                <Text style={{color: "white"}}>Sponsorer</Text>
            </View>
            <Text style={{ color: "#006600", fontSize: 40 }}>Menu emner</Text>
            <Text style={{ color: "#006600", fontSize: 20 }}>Hvad er Aarhus duck race?</Text>
            <Text style={{ color: "#006600", fontSize: 20 }}>Køb din and her</Text>
            <Text style={{ color: "#006600", fontSize: 20 }}>Doner til os her!</Text>
            <Text style={{ color: "#006600", fontSize: 20 }}>Hvor foregår det?</Text>
            <Text style={{ color: "#006600", fontSize: 40 }}>Præmier</Text>
            <Text style={{ color: "#006600", fontSize: 40 }}>Formål</Text>
            <Text style={{ color: "#006600", fontSize: 40 }}>Om os</Text>
            <Text style={{ color: "#006600", fontSize: 10 }}>/features/static-pages/about-us-page.screen.tsx</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#59A2D6",
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        margin: 10,
        width: "100%",
        maxHeight: "50px",
    },
});