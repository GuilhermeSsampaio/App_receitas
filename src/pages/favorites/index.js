import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { getFavorites } from '../../utils/storage';
import { useIsFocused } from '@react-navigation/native';

export function Favorites() {
  const [receipes, setReceipes] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {

    let isActive = true;

    async function getReceipes() {
      const result = await getFavorites("@appreceitas")
      
      if(isActive){
        setReceipes(result)
      }
    }
    
    if(isActive){
      getReceipes();
    }
  }, [isFocused])

  return (
    <SafeAreaView style={styles.container}>
        <Text style= {styles.title}>Meus favoritos</Text>
        {receipes.length === 0 && (
          <Text>Você não tem nenhuma receita salva</Text>
        )}
    </SafeAreaView>
  );
}
  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f3f9ff',
        paddingStart:14,
        paddingEnd:14,
        paddingTop: 36
    },
    title:{
      color: "#000",
      fontWeight:'bold',
      fontSize: 24
    }
  })