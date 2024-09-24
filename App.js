import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, FlatList} from 'react-native';
import Cards from './component/cards';
import ProductList from './src/ProductList'


const App = () => {

  const card = ({item}) =>  <Cards products={item}></Cards>
  

  return (
  <SafeAreaView style={style.container}>
    <View style={style.container}>
      <Text style= {style.header}>PATİKASTORE </Text>
      <TextInput 
        style = {style.TextInput}
        placeholder='Ara...'
        selectionColor='#6A1B9A'        
        ></TextInput>

    <FlatList 
        data={ProductList}
        renderItem={card }
        numColumns={2}
    >

    </FlatList>


  
    </View>
  </SafeAreaView>
  )
}

const style= StyleSheet.create ({
  container:{
    flex:1,
    padding:3
  },

  header:{
    color: '#6A1B9A',
    fontSize : 22,
    fontWeight: 'bold',
    marginBottom:10
  },

  TextInput:{    
    height: 40,
    margin:5,
    padding: 10, 
    color : '#6A1B9A',
    backgroundColor :'#E0E0E0',
    borderRadius: 8, 
  }
})

export default App;
