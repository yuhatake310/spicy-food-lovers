import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 36,
        color: 'red',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    loginButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000000',
        borderRadius: 6,
        width: 167,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerButton: {
        backgroundColor: '#000000',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000000',
        borderRadius: 6,
        width: 167,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.text}>SpicyFoodLovers</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.loginButton}>
                    <Button
                        onPress={() => navigation.navigate('LogIn')}
                        title="LOG IN"
                        color="#000000"
                    />
                </View>
                <View style={styles.registerButton}>
                    <Button
                        onPress={() => navigation.navigate('SignUp')}
                        title="REGISTER"
                        color="#FFFFFF"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
