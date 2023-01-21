import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultBMI from "./Result";

export default function Form(){

    const [Height, setHeight] = useState(null);
    const [Weight, setWeight] = useState(null);
    const [messageBMI, setMessageBMI] = useState("Fill in the weight and height.");
    const [BMI, setBMI] = useState(null);
    const [textButton, setTextButton] = useState("Calculate");

    function bmiCalculator(){
        return setBMI((Weight/(Height*Height)).toFixed(2))
    }

    function validationBmi(){
        if(Weight != null && Height != null){
            bmiCalculator()
            setHeight(null)
            setWeight(null)
            setMessageBMI("Your BMI is same: ")
            setTextButton("Recalculate")
            return
        }
        setBMI(null)
        setTextButton("Calculate")
        setMessageBMI("Fill in the Height and Weight")
    }

    return(
        <View>
            <View>
                <Text>Height</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={Height}
                    placeholder="Ex. 1.67"
                    keyboardType="numeric"
                />
                <Text>Weight</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={Weight}
                    placeholder="Ex. 60"
                    keyboardType="numeric"
                />
                <Button
                    onPress={() => validationBmi()}
                    title="Calculate"
                />
            </View>
            <ResultBMI messageResultBMI={messageBMI} ResultBMI={BMI}/>
        </View>
    )
}