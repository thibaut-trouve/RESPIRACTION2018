import React, { Component } from "react";
import { Text, View } from "react-native";



export default class Two extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    render () {
        return (
            <View>
                <Text> Coucou c'est la page 2</Text>
            </View>
        )
    }
}