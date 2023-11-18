
import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./stylesTranferencia"; // Importe o StyleSheet

const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.login}>
      <Text style={styles.welcomeText}>Boas Vindas ao Nubank!</Text>
      <Text style={styles.welcomeText}>Para começar, qual é o seu</Text>
      <Text style={styles.welcomeText}>CPF</Text>
      <Text style={styles.normalText}>Precisamos dele para dar inicio ao</Text>
      <Text style={styles.normalText}>seu cadastro</Text>
    <TextInput style={styles.input} placeholder="000.000.000-00"/>
    </View>
    </View>
  );
};

export default App;
