import { View,Text, Image, StyleSheet } from "react-native";

 import React from "react";


 

 export default function CardAluno() {



    return (



        <View style={estilo.container}>

            <Image style = {estilo.imagem}source={{uri:'https://img.freepik.com/vetores-premium/aluno-fofo-pensando-ilustracao-dos-desenhos-animados_339032-1052.jpg'}} />

            <Text> Aluno </Text>

        </View>

    )

 }



 const estilo = StyleSheet.create ({

     container: {

         marginHorizontal: 5,

         backgroundColor: '#abcdef',

     },
     imagem :{
        width:130,
        height:120

     }

 })