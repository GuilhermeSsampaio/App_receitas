import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export function Favorites() {
  return (
    <View style={styles.container}>
        <Text>Favorites</Text>
    </View>
  );
}
  const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
    }
  })