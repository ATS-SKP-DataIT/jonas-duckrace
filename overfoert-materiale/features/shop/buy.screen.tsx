import { StackRouter } from "@react-navigation/routers";
import React, { Component, useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";



export const BuyScreen = () => {
    const [number, setNumber] = React.useState<any[]>([])

    const Styles = StyleSheet.create({
        title:{
            fontSize: 30,
            textAlign: "center"
        }
    })

    const getDuck = () =>{
            const randomNumber = Math.floor(Math.random()*5000 + 1)
            //alert("Du har nu købt anden med nummer: "+randomNumber)
            setNumber(number => [number, " - "+ randomNumber])
    }

    return(
        <View style={{flex: 1, justifyContent: "center", margin: 8}}>
        <Text style={Styles.title}>Køb en and</Text>
        <Button
         title="Tryk her for at få en and!🦆"
         onPress={() => getDuck()}
         color="#32a852"
        />
        <Text style={Styles.title}>Dine ænder⬇</Text>
        <Text>{number}</Text>
        </View>
    )
}




