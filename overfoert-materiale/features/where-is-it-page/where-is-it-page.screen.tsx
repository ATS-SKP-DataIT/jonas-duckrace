// Test
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HomeScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#000000", fontSize: 30 }}>[img] Hvor foregår racet?</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                [embed google map]
			</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Vore ænder skal tilbageligge den krævende
                strækning fra Vester Alle til Immervad.
			</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Alt efter omstændighederne tager det
                ænderne ca 45 minutter at tilbagelægge
                strækningen. Her tages dog forbehold for
                strøm, vind, drone, tang og
                andre vanskeligheder.
			</Text>
            <Text style={{ alignItems: "center",color: "black", fontSize: 20, fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
                Samtidigt med dette vil der i Mølleparken
                være en scene med live musik
                og andre former for underholdning.
                Så Rab Rab afsted!
            </Text>
        </View>
    );
};