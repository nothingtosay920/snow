import { useRoute } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Pressable } from 'react-native';


export const Details = () => {
  const route = useRoute()
  return (
    <Text>{route.path}</Text>
  );
}
