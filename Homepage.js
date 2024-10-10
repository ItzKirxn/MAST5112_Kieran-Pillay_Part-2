import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
  const [menuItems, setMenuItems] = useState([
    { name: 'Salad', description: 'Fresh garden salad', course: 'Starters', price: '5' },
    { name: 'Steak', description: 'Grilled steak with garlic butter', course: 'Mains', price: '20' },
  ]);

  const calculateAveragePrice = (course) => {
    const filteredItems = menuItems.filter(item => item.course === course);
    if (filteredItems.length === 0) return 0;
    const total = filteredItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return (total / filteredItems.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name} - {item.course}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />

      <Text style={styles.total}>Total Menu Items: {menuItems.length}</Text>

      {/* Average Price per Course */}
      <Text>Average Price for Starters: ${calculateAveragePrice('Starters')}</Text>
      <Text>Average Price for Mains: ${calculateAveragePrice('Mains')}</Text>
      <Text>Average Price for Desserts: ${calculateAveragePrice('Desserts')}</Text>

      <Button title="Add New Item" onPress={() => navigation.navigate('Add Item')} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('Filter Menu')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
