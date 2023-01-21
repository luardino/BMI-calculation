import React from "react";
import {Text, View} from "react-native"

export default function ResultBMI(props){
    return(
        <View>
            <Text>{props.resultBMI}</Text>
            <Text>{props.messageResultBMI}</Text>
        </View>
    )
}