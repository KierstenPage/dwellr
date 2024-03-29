import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

import { colors } from '../../../theme';
// import { routes } from '../../../navigation/router';
import { images } from '../../../assets';

export function WelcomeScreen({ navigation }) {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.screen}>
      {/* <Image style={styles.logo} source={images.logo} /> */}
      <Text style={styles.titleText}>Welcome to Chat</Text>
      <Text style={styles.titleText}> </Text>
      <Text style={styles.titleText}>Enter Your Username</Text>

      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={colors.ghost}
      />
      <TouchableOpacity
        disabled={!username}
        style={styles.button}
        // onPress={() => navigation.navigate(routes.ChatList.name, { username })}
        onPress= {() => navigation.navigate('Chatlist', { username })}
        >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.snow,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: "#47c9ba",
  },
  input: {
    width: 280,
    height: 50,
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.eclipse,
    marginTop: 32,
    marginBottom: 16,
  },
  button: {
    width: 280,
    height: 50,
    backgroundColor: "#47c9ba",
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: colors.white,
  },
});

export default WelcomeScreen;

