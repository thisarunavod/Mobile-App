import {styles} from "../App";
import {Button, ScrollView, Text, TextInput} from "react-native";
import React, {useState} from "react";

export function DayWorksCalculatorScreen() {
    const [workers, setWorkers] = useState('');
    const [hours, setHours] = useState('');
    const [wage, setWage] = useState('');
    const [totalCost, setTotalCost] = useState(0);

    const calculateDayWorks = () => {
        const workersValue = parseFloat(workers);
        const hoursValue = parseFloat(hours);
        const wageValue = parseFloat(wage);

        if (
            isNaN(workersValue) ||
            workersValue <= 0 ||
            isNaN(hoursValue) ||
            hoursValue <= 0 ||
            isNaN(wageValue) ||
            wageValue <= 0
        ) {
            alert('Please enter valid values for workers, hours, and wage');
            return;
        }

        // Formula: Total Cost = Workers * Hours * Wage
        const totalCostValue = workersValue * hoursValue * wageValue;
        setTotalCost(totalCostValue);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Day Works Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter number of workers"
                keyboardType="numeric"
                value={workers}
                onChangeText={setWorkers}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter hours worked"
                keyboardType="numeric"
                value={hours}
                onChangeText={setHours}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter hourly wage (₹)"
                keyboardType="numeric"
                value={wage}
                onChangeText={setWage}
            />
            <Button title="Calculate" onPress={calculateDayWorks} />
            <Text style={styles.result}>Total Cost: ₹{totalCost.toFixed(2)}</Text>
        </ScrollView>
    );
}