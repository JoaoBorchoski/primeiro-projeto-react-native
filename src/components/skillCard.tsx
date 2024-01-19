import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const SkillCard = ({skill}: any) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    borderRadius: 7,
    padding: 14,
    alignItems: 'center',
    marginBottom: 15,
  },
  textSkill: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
