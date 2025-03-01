import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';

// Define the types for your navigation stack
type RootStackParamList = {
  Home: undefined;
  ConcreteCalculator: undefined;
  ReinforcementCalculator: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

// Home Screen Component
function HomeScreen({ navigation }: { navigation: any }) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Construction Calculator</Text>
        <Button
            title="Concrete Mixture Calculator"
            onPress={() => navigation.navigate('ConcreteCalculator')}
        />
        <View style={styles.buttonSpacer} />
        <Button
            title="Reinforcement Calculator"
            onPress={() => navigation.navigate('ReinforcementCalculator')}
        />
      </View>
  );
}

// Concrete Mixture Calculator Screen
function ConcreteCalculatorScreen() {
  const [volume, setVolume] = useState('');
  const [cement, setCement] = useState(0);
  const [sand, setSand] = useState(0);
  const [aggregate, setAggregate] = useState(0);

  const calculateConcrete = () => {
    const volumeValue = parseFloat(volume);
    if (isNaN(volumeValue) || volumeValue <= 0) {
      alert('Please enter a valid volume');
      return;
    }

    // Standard ratios for M20 grade concrete (1:1.5:3)
    const cementRatio = 1;
    const sandRatio = 1.5;
    const aggregateRatio = 3;
    const totalRatio = cementRatio + sandRatio + aggregateRatio;

    const cementVolume = (cementRatio / totalRatio) * volumeValue;
    const sandVolume = (sandRatio / totalRatio) * volumeValue;
    const aggregateVolume = (aggregateRatio / totalRatio) * volumeValue;

    // Assume density of cement = 1440 kg/m³, sand = 1600 kg/m³, aggregate = 1500 kg/m³
    setCement(cementVolume * 1440);
    setSand(sandVolume * 1600);
    setAggregate(aggregateVolume * 1500);
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Concrete Mixture Calculator</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter volume of concrete (m³)"
            keyboardType="numeric"
            value={volume}
            onChangeText={setVolume}
        />
        <Button title="Calculate" onPress={calculateConcrete} />
        <Text style={styles.result}>Cement: {cement.toFixed(2)} kg</Text>
        <Text style={styles.result}>Sand: {sand.toFixed(2)} kg</Text>
        <Text style={styles.result}>Aggregate: {aggregate.toFixed(2)} kg</Text>
      </ScrollView>
  );
}

// Reinforcement Calculator Screen
function ReinforcementCalculatorScreen() {
  const [length, setLength] = useState('');
  const [diameter, setDiameter] = useState('');
  const [weight, setWeight] = useState(0);

  const calculateReinforcement = () => {
    const lengthValue = parseFloat(length);
    const diameterValue = parseFloat(diameter);

    if (isNaN(lengthValue) || lengthValue <= 0 || isNaN(diameterValue) || diameterValue <= 0) {
      alert('Please enter valid length and diameter');
      return;
    }

    // Formula: Weight = (Diameter² / 162) * Length
    const weightValue = (Math.pow(diameterValue, 2) / 162 * lengthValue);
    setWeight(weightValue);
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Reinforcement Calculator</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter length of bar (m)"
            keyboardType="numeric"
            value={length}
            onChangeText={setLength}
        />
        <TextInput
            style={styles.input}
            placeholder="Enter diameter of bar (mm)"
            keyboardType="numeric"
            value={diameter}
            onChangeText={setDiameter}
        />
        <Button title="Calculate" onPress={calculateReinforcement} />
        <Text style={styles.result}>Weight: {weight.toFixed(2)} kg</Text>
      </ScrollView>
  );
}

// Main App Component
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Home' }}
          />
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
        </Stack.Navigator>
      </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
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
});