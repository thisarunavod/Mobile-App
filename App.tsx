import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import {WallFormworkCalculatorScreen} from "./components/WallFormworkCalculatorScreen";
import {ReinforcementCalculatorScreen} from "./components/ReinforcementCalculatorScreen";
import {ConcreteCalculatorScreen} from "./components/ConcreteCalculatorScreen";

// Define the types for your navigation stack
type RootStackParamList = {
    Home: undefined;
    ConcreteCalculator: undefined;
    ReinforcementCalculator: undefined;
    WallFormworkCalculator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// Home Screen Component
function HomeScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Material Calculator</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Concrete Mixture Calculator"
                    onPress={() => navigation.navigate('ConcreteCalculator')}
                />
            </View>
            <View style={styles.buttonSpacer} />
            <View style={styles.buttonContainer}>
                <Button
                    title="Reinforcement Calculator"
                    onPress={() => navigation.navigate('ReinforcementCalculator')}
                />
            </View>
            <View style={styles.buttonSpacer} />
            <View style={styles.buttonContainer}>
                <Button
                    title="Wall Formwork Calculator"
                    onPress={() => navigation.navigate('WallFormworkCalculator')}
                />
            </View>
        </View>
    );
}


// Wall Formwork Calculator Screen
/*function WallFormworkCalculatorScreen() {
    const [height, setHeight] = useState('');
    const [length, setLength] = useState('');
    const [area, setArea] = useState(0);

    const calculateFormwork = () => {
        const heightValue = parseFloat(height);
        const lengthValue = parseFloat(length);

        if (isNaN(heightValue) || heightValue <= 0 || isNaN(lengthValue) || lengthValue <= 0) {
            alert('Please enter valid height and length');
            return;
        }

        // Formula: Area = Height * Length
        const areaValue = heightValue * lengthValue;
        setArea(areaValue);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Wall Formwork Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter height of wall (m)"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter length of wall (m)"
                keyboardType="numeric"
                value={length}
                onChangeText={setLength}
            />
            <Button title="Calculate" onPress={calculateFormwork} />
            <Text style={styles.result}>Area: {area.toFixed(2)} m²</Text>
        </ScrollView>
    );
}*/


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                <Stack.Screen
                    name="ConcreteCalculator"
                    component={ConcreteCalculatorScreen}
                    options={{ title: 'Concrete Calculator' }}
                />
                <Stack.Screen
                    name="ReinforcementCalculator"
                    component={ReinforcementCalculatorScreen}
                    options={{ title: 'Reinforcement Calculator' }}
                />
                <Stack.Screen
                    name="WallFormworkCalculator"
                    component={WallFormworkCalculatorScreen}
                    options={{ title: 'Wall Formwork Calculator' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Styles
export  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    result: {
        fontSize: 18,
        marginTop: 16,
    },
    buttonSpacer: {
        height: 16,
    },
    buttonContainer: {
        width: '80%', // Fixed width for all buttons
    },
});