import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {Button} from '../components/button';
import {SkillCard} from '../components/skillCard';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<string[]>([]);

  const handleAddSkill = () => {
    setSkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Joao</Text>
      <TextInput
        style={styles.input}
        placeholder="Add skill..."
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button func={handleAddSkill} />
      <Text
        style={[
          styles.title,
          {
            marginTop: 10,
          },
        ]}>
        My Skills{' '}
      </Text>
      {skills.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={skills}
          keyExtractor={item => item}
          renderItem={({item}) => <SkillCard skill={item} />}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 30,
    gap: 15,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    borderRadius: 7,
  },
});
