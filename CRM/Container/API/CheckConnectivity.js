import React, { Component } from "react";
import { View, Text, Button, Alert, NetInfo, Platform } from "react-native";
const CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === "android") {
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                return true
            } else {
                return false
            }
        });
    } else {
        // For iOS devices
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleFirstConnectivityChange
        );
    }
};

handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
    );

    if (isConnected === false) {
        return false
    } else {
        return true
    }
};
export default CheckConnectivity