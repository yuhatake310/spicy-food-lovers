import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { emailSignUp } from '../auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    textInput: {
        fontSize: 14,
        color: 'black',
        width: '100%',
        height: 52,
        margin: 16,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    signUpButton: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 6,
        width: '100%',
        height: 52,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
                editable
                maxLength={50}
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="done"
            />
            <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
                editable
                maxLength={20}
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry
                returnKeyType="done"
            />
            <View style={styles.signUpButton}>
                <Button
                    title="SIGN UP"
                    color="#FFFFFF"
                    onPress={() => emailSignUp(email, password, navigation)}
                />
            </View>
        </View>
    );
};

export default SignUpScreen;
