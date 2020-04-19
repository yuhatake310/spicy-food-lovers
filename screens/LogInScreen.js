import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    AsyncStorage,
} from 'react-native';
import { emailLogin } from '../auth';

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
    loginButton: {
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

const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        autoLogin();
    }, []);

    const autoLogin = async () => {
        const isLogin = await AsyncStorage.getItem('isLogin');
        isLogin ? navigation.navigate('tabHome') : console.log('false');
    };

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
            <View style={styles.loginButton}>
                <Button
                    title="LOG IN"
                    color="#FFFFFF"
                    onPress={() => emailLogin(email, password, navigation)}
                />
            </View>
        </View>
    );
};

export default LogInScreen;
