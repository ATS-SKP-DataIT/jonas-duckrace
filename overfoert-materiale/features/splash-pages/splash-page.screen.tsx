// Splash page for mobile
import React from 'react';
import { Text, StyleSheet, TextInput } from "react-native";

import "../../../assets/css/main.css";


export const SplashScreen = () => {
    return (
        <>
        <div className="splash-page">
            <div className="splash-page-duckrace-logo">
                <img
                    id="splash-page-duckrace-logo-image"
                    src="./assets/img/splash-logo.png"
                />
            </div>
            <header className="header">
                <div className="p-0 col-6 col-md-3 col-xl-2">
                    <a href="/" title="AARHUS TECH" className="header__color-box">
                        <h1>AARHUS<br /><span> TECH</span></h1>
                    </a>
                </div>
            </header>
        </div>
        </>
    );
};