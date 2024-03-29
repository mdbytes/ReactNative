import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text h3 style={styles.heading}>
        Sign Up For Tracker
      </Text>

      <Input
        label="Email"
        style={styles.input}
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newEmail) => setEmail(newEmail)}
      />

      <Input
        secureTextEntry
        label="Password"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />

      <Button
        style={styles.button}
        title="Sign Up"
        onPress={() => navigation.navigate("Signin")}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const topPosition = "0%";
const buttonWidth = "75%";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginBottom: 75,
  },
  heading: {
    marginVertical: 20,
  },
  input: {
    marginVertical: 20,
    fontSize: 24,
  },
  button: {
    width: buttonWidth,
  },
});

export default SignupScreen;
