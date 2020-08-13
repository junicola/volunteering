import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import ButtonColor from '../components/ButtonColor'

const LoginScreen = ({navigation}) => {
    return (
        <LinearGradient style={styles.gradient} colors={['#A8E9E7', '#7FA9DF']}>
            <StatusBar backgroundColor="#A8E9E7"/>
            <View style={styles.container}>
                <Text style={styles.title}>Volunteering</Text>

                <Text style={styles.text}>Login</Text>
                <TextInput placeholder="E-mail" placeholderTextColor="#FFFFFF80" autoCompleteType="email" style={styles.input}></TextInput>
                <TextInput placeholder="Senha" placeholderTextColor="#FFFFFF80" secureTextEntry={true} style={styles.input}></TextInput>

                <ButtonColor text="Entrar" colorBg="rgba(255, 255, 255, 0.31)" />

                <Text style={styles.textForgot}>Esqueceu a senha?</Text>

                <TouchableOpacity style={styles.viewTextNew} onPress={() => navigation.navigate('RegisterScreen')} >
                    <Text style={styles.textNew}>Ainda não tem uma conta?</Text>
                    <Text style={styles.textNew}>Cadastre-se aqui.</Text>
                </TouchableOpacity>

            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container:{
        paddingRight:20,
        paddingLeft:20,
    },
    title: {
      fontFamily: "Pacifico-Regular",
      color: "rgba(255,255,255,0.7)",
      fontSize: 45,
      textAlign: "center",
      marginTop: 50,
    },
    text:{
        color:"white",
        fontSize: 20,
        fontFamily: "Roboto",
        textAlign: "center",
        marginTop: 80,
        marginBottom: 20,
    },
    input:{
        borderColor: "white",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        color: "white",
        fontSize: 18,
        padding: 15,        
    },
    textForgot: {
        color:"white",
        fontSize: 16,
        fontFamily: "Roboto",
        textAlign: "right",
        marginTop: 20,
    },
    viewTextNew: {
        marginTop: 120,
    },
    textNew:{
        color:"white",
        fontSize: 18,
        fontFamily: "Roboto",
        textAlign: "center",
    }
});

export default LoginScreen;