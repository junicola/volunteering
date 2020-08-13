import React, { useState } from 'react';
import { View, Text } from 'react-native';

const LoadingScreen = () => {
    return (
        <View>
            <Text style={styles.teste}>Loading Screen test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    teste: {
      fontFamily: "serif",
    }
  });

export default LoadingScreen;