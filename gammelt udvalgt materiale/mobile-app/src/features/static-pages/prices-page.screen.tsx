// Test
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HomeScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#000000", fontSize: 30 }}>[img] Om os</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Foreningen ”Aarhus duck Race” er
                en forening som ene og alene
                på 100 % frivillig basis at afholde
                dette løb og folkefest.
			</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Samtidigt med at gøre det.
                Har vi det skide sjovt. 
                Det er jo altid sjovt at
                gøre noget godt for andre.
			</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Så har du lyst til at være frivillig.
                Er du meget velkommen til at blive
                medhjælper, og medlem af foreningen.
			</Text>
        </View>
    );
};