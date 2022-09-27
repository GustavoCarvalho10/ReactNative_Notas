import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

const UselessTextInput = () => {
  const [textNome, onChangeText] = React.useState('');
  const [number1, onChangeNumber1] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  const [number3, onChangeNumber3] = React.useState('');
  const [textLink, onChangeText2] = React.useState('');

  return (
    <SafeAreaView>
        <Text style={styles.titulo}>Cadastro de Alunos</Text>
        <Text style={styles.text}>Nome do aluno</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={textNome}
        placeholder="Insira o nome do aluno"
      />
      <Text style={styles.text}>Nota 01</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Insira a nota 01"
      />
      <Text style={styles.text}>Nota 02</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Insira a nota 02"
      />
      <Text style={styles.text}>Nota 03</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="Insira a nota 03"
      />
      <Text style={styles.text}>Foto do aluno</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={textLink}
        placeholder="Link da foto do aluno"
      />
       <TouchableOpacity style={[styles.botoes ,{backgroundColor:'red'}]}>
                    <Text> Cadastrar Aluno </Text>

            </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 390,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  text: {
    color: 'grey',
    fontSize: '15px',
    textAlign: 'left',
    marginLeft: '18px',
    marginTop: '10px',
    fontFamily: 'sans-serif',
  },

  botoes:{
    width:'390px',
    alignItems:'center',
    justifyContent:'flex-start',
    height: 40,
    borderRadius: 5,
    marginBottom: 10,

    fontSize:10,
    color:'white',
    flexDirection:'row',
  },

  titulo: {
    color: 'black',
    fontSize: '25px',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px'
  },
}); 

export default UselessTextInput;