import React, { useState } from 'react';

import { Text, StyleSheet, TextInput } from "react-native";

export const ProfilScreen = () => {
    return(
        <>
        {/* PERSONAL DETAILS FORM */}
        <Text style={[styles.Red, styles.InputHeader]}>Personal Details</Text> 
        <Text style={[styles.InputDescription]}>Full Name</Text><TextInput
            style={[styles.InputText]}
            placeholder="Enter Full Name" />
        <Text style={[styles.InputDescription]}>Phone</Text><TextInput
            style={[styles.InputText]}
            placeholder="Enter phone number" />
        <Text style={[styles.InputDescription]}>Email</Text><TextInput
            style={[styles.InputText]}
            placeholder="Enter Email" />

        {/* ADDRESS FORM */}
        <Text style={[styles.Red, styles.InputHeader]}>Address</Text> 
        <Text style={[styles.InputDescription]}>Steet</Text><TextInput
            style={[styles.InputText]}
            placeholder="Enter Street" />
        <Text style={[styles.InputDescription]}>City</Text><TextInput
            style={[styles.InputText]}
            placeholder="Enter City" />
        <Text style={[styles.InputDescription]}>Zipcode</Text><TextInput
            style={[styles.InputText]}
            placeholder="Zip Code" />

        {/* DUCK INFORMATION */}
        <Text style={[styles.Red, styles.InputHeader ]}>Duck Information</Text> 
        <Text style={[styles.InputDescription]}>Your Ducks Number is: 271</Text>        
        </>
    )
}

const styles = StyleSheet.create({
    // PRE DEFINFED GROUPS
    InputHeader: {
        marginTop: '2%',
        paddingLeft: '2%'
    },
    
    InputDescription: { 
        marginTop: '5%',
        paddingLeft: '2%'
    },

    InputText: {
        width: '44%',
        padding: '1%',
        marginLeft: '2%',
        borderColor: 'gray', 
        borderWidth: 1,
    },

    Input: {
        textDecorationLine: 'underline',
    },

    // COLORS:
    Purple: {
      color: '#9C27B0',
    },
    Red: {
      color: '#F44336'
    },
    Orange:{
      color: '#FF9800'
    },
    Blue:{
      color: '#0000FF'
    }
  });