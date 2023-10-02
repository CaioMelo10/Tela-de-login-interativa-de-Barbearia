import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './src/components/LoginScreen';
import IntroSlider from './src/components/IntroSlider'; 

export default function App() {
  const [showHome, setShowHome] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <View style={styles.container}>
      {showHome ? (
        <Text>ENTROU NA HOME</Text>
      ) : showLogin ? (
        <LoginScreen />
      ) : (
        <IntroSlider onDone={() => setShowLogin(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
