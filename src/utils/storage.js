import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os favoritos

export async function getFavorites(key) {
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}
//Salvar um favorito

export async function saveFavorite(key, newItem) {
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some( item => item.id === newItem.id)

    if(hasItem){
        console.log("item ja salvo na lista");
        return;
    }

    myFavorites.push(newItem);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
    console.log("Salvo com sucesso");
}
//Remover um favorito

export async function removeItem(id) {
    let receipes = await getFavorites("@appreceitas")
    
    let myFavorites =  receipes.filter( item => {
        return(item.id !== id)//aqui ele vai receber todos os itens da lista, menos o atual, que será removido da lista
    })

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites))

    console.log("removido com sucesso");
    return(myFavorites);
}

export async function isFavorite(receipe){
    let myReceipes = await getFavorites("@appreceitas")

    const favorite = myReceipes.find( item => item.id === receipe.id)

    if(favorite){
        return true;
    }
    return false;
}

