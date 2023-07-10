import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export function Search() {
  return (
    <View style={styles.container}>
        <Text>search</Text>
    </View>
  );
}
  const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
    }
  })