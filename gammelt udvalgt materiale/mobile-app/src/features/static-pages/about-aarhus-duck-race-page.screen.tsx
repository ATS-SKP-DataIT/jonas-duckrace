// Test
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HomeScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#000000", fontSize: 30 }}>
                Aarhus Duck Race
            </Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Aarhus Duckrace er et spændende festligt
                familie arrangement. Hvor 5000 super
                hurtige ænder dyster om at være den
                hurtigste and på åen.
			</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Hver and har et nummer, som du kan købe.
                Vinder anden med dit nummer
                er der super fede præmier til dig.
			</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Samtidigt med løbet er årets<br/>
                folkefest, med musik dans,
                og andre sjove happenings i Mølleparken. 
			</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Der vil være storskærm,
                hvor du via en drone video
                kan følge din and.
                Og være helt tæt på løbet.
			</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Vi glæder os til at se dig
                den 1. Maj 2022 i Mølleparken.
            </Text>
        </View>
    );
};