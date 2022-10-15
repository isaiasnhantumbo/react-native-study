import { useState } from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState<ISkillData[]>([]);

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: skill,
    };
    setSkills((state) => [...state, data]);
  }
  function handleRemoveSkill(id: string) {
    setSkills((state) => state.filter((skill) => skill.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Larson</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#999"
        onChangeText={setSkill}
      />
      <Button title="Adicionar" onPressOut={handleAddSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
