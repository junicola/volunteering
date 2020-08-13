import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ButtonColor = (props) => {
    return (
        <View style={[styles.buttonBg, {backgroundColor: props.colorBg}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonBg: {
        borderRadius: 10,
    },
    text:{
        color:"white",
        fontSize: 18,
        fontFamily: "Roboto",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
    }
});

export default ButtonColor;