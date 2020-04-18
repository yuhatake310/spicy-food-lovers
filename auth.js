import firebase from './firebase';
import { Alert } from 'react-native';

export const emailSignUp = (email, password, navigation) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            if (user) {
                navigation.navigate('tabHome');
                console.log('Success to Signup');
            }
        })
        .catch((error) => {
            console.log(error);
            Alert.alert('', '登録に失敗しました。再度お試しください。');
        });
};

export const emailLogin = (email, password, navigation) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            navigation.navigate('tabHome');
            console.log('Success to Login');
        })
        .catch((error) => {
            console.log(error);
            Alert.alert('', 'ログインに失敗しました。再度お試しください。');
        });
};

export default firebase;
