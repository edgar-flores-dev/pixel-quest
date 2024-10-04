import React from 'react';
import { Text, View, TextInput, StyleSheet, Button, FlatList } from "react-native";
import { router } from 'expo-router';
import { useVideoGameStore } from '@/app/state/video-games/useVideoGameStore';

export default function SearchPage() {
  const { searchByTitle, gameResults } = useVideoGameStore();
  const [title, onChangeText] = React.useState('');
  const navigateToDetailsPage = () => {
    router.navigate("./pages/game-details");
  }
  const search = () => {
    searchByTitle(title);
  }

  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome, Search Any Video Game</Text>
      <Text>Type to Search</Text>
      <TextInput
        style={styles.input}
        placeholder='Search Here'
        onChangeText={onChangeText}
        value={title} />
      <Button
        title='Search'
        onPress={search}
      />
      <FlatList
        data={gameResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            <Text>{item.name}</Text>
          </>
        )}
        style={{ maxHeight: 100 }}
      />
      <Button
        title='Route to Details Page'
        onPress={navigateToDetailsPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },
});

