import React, { useState } from 'react';
import { View, Text, Picker, FlatList, StyleSheet } from 'react-native';

export default function FilterScreenPage({ route }) {
  const [selectedCourse, setSelectedCourse] = useState('Starters');
  const menuItems = route.params.menuItems;

  const filteredItems = menuItems.filter(item => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filter by Course:</Text>
      <Picker
        selectedValue={selectedCourse}
        onValueChange={setSelectedCourse}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />
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
  picker: {
    marginBottom: 10,
  },
  menuItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 5,
  },
});
