import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Button = ({func}: any) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={func}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});
