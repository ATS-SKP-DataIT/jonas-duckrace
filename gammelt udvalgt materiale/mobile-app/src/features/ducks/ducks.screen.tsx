import React, { useState } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements'; 
import { ScrollView } from 'react-native-gesture-handler';
import ducks from '../../infrastructure/DUCK_DATA.json'; //import json data

export const DucksScreen = () => {
    return (
        <>
            <Text style={{fontSize: 25, color: "black", textAlign:'center'}}>Købte ænder</Text>
            <ScrollView> 
                { ducks.map(duck => {           //List all the bought ducks
                    return(
                    <>
                        <Card>
                            <Text>Navn - {duck.customer_name} </Text>
                            <Card.Divider/>
                            <Text>And Nr: {duck.duck_number}</Text>
                            <Text></Text>
                            <Card.Divider/>
                            <Text style={{color: "grey", fontSize: 10}}>Kundenummer: {duck.customer_id} Købt den {duck.date}</Text>
                        </Card>
                    </>
                    )
                })}
            </ScrollView>
        </>
    )

}
