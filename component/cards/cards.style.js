import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({
     
    cards_container : {
        flex:1,
        backgroundColor:'#CCC',
        borderRadius:8,
        padding:10,
        margin:5,
        width: Dimensions.get('window').width/2,          
        
    },

    cards_content:{
        backgroundColor:'#fff',
        borderRadius: 4,
        padding:5,
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    cards_image :{
        width: Dimensions.get('window').width/3,
        height:150,
        resizeMode:"contain",   
        
        
    },
    cards_title :{
        fontWeight:'bold',
        marginTop:2
    },
    cards_price:{
        color: '#6A1B9A',
        fontSize:15,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
