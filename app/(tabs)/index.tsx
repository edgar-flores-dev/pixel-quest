import React from 'react';
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { router } from 'expo-router';
import VideoGameStore from '@/app/state/video-games/videoGameStore';

export default function SearchPage() {
  const [title, onChangeText] = React.useState('');
  const videoGameStore: VideoGameStore = 
  const navigateToDetailsPage = () => {
    router.navigate("./pages/game-details");
  }
  const search = () => {
    const searchAPI = title;
    videoGameStore.searchByTitle(title);
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
      <Text>Results will go down here</Text>
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

