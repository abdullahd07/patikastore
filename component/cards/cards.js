import React from "react";
import Styles from "./cards.style";
import { Image, Text, View } from "react-native";

const Cards = ({products})  => {
 return (
   <View style = {Styles.cards_container}>
          <View style ={Styles.cards_content}>
            <Image style = {Styles.cards_image}  source={{ uri:products.imgURL}}></Image>
          </View>
      <Text style ={Styles.cards_title}> {products.title}</Text>
      <Text style ={Styles.cards_price}>{products.price}</Text>
      
      {products.inStock  ? "": <Text> {products.inStock ? "" :"Stokta Yok"}</Text>}
   </View>
 )
}

export default Cards;