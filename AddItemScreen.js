import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';

export default function AddItemPage({ navigation, route }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    // Send the new menu item back to HomePage (or store it in a global state)
    const newItem = { name, description, course, price };
    route.params.addMenuItem(newItem);  // Assuming route params to pass the addMenuItem function
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter dish name"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        placeholder="Enter description"
      />

      <Text style={styles.label}>Select Course:</Text>
      <Picker
        selectedValue={course}
        onValueChange={setCourse}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <Text style={styles.label}>Price:</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter price"
      />

      <Button title="Add Menu Item" onPress={handleAddItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    marginBottom: 10,
  },
});
