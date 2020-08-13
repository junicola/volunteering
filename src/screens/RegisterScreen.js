import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ButtonColor from '../components/ButtonColor'
import {Picker} from '@react-native-community/picker';

const RegisterScreen = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("vol");
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="rgba(255,255,255,0.1)" barStyle="dark-content"/>
            <Text style={styles.title}>Volunteering</Text>

            <Text style={styles.text}>Cadastre-se</Text>
            <TextInput placeholder="E-mail" placeholderTextColor="#BEBEBE80" style={styles.input}></TextInput>
            <TextInput placeholder="Senha" placeholderTextColor="#BEBEBE80" secureTextEntry={true} style={styles.input}></TextInput>
            <TextInput placeholder="Nome" placeholderTextColor="#BEBEBE80" style={styles.input}></TextInput>
            
            <Text style={styles.type}>Tipo da conta</Text>
            <Picker
                placeholder="Tipo de"
                mode="dropdown"
                selectedValue={selectedValue}
                style={styles.drop}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Voluntário" value="vol" />
                <Picker.Item label="Instituição" value="inst" />
            </Picker>
            
            <ButtonColor text="Cadastrar" colorBg="#7FA9DF80"/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingRight:20,
        paddingLeft:20,
        backgroundColor:"rgba(255,255,255,0.9)",
        flex: 1,
    },
    title: {
      fontFamily: "Pacifico-Regular",
      color: "rgba(127, 169, 223, 1)",
      fontSize: 45,
      textAlign: "center",
      marginTop: 50,
    },
    text:{
        color:"#BEBEBE",
        fontSize: 20,
        fontFamily: "Roboto",
        textAlign: "center",
        marginTop: 80,
        marginBottom: 20,
    },
    input:{
        borderColor: "#BEBEBE",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        color: "#BEBEBE",
        fontSize: 18,
        padding: 15,        
    },
    type:{
        color:"#BEBEBE",
        fontSize: 18,
    },
    drop:{
        height: 80,
        color: "#BEBEBE",
    }
});

export default RegisterScreen;