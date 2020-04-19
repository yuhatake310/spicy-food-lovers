import firebase from './firebase';
import { AsyncStorage, Alert } from 'react-native';

export const emailSignUp = async (email, password, navigation) => {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            if (user) {
                AsyncStorage.setItem('isLogin', 'true');
                navigation.navigate('tabHome');
                console.log('Success to Signup');
            }
        })
        .catch((error) => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    Alert.alert(
                        '',
                        '指定したメールアドレスは既に登録されています'
                    );
                    break;
                case 'auth/invalid-email':
                    Alert.alert('', '指定したメールアドレスは無効です');
                    break;
                case 'auth/weak-password':
                    Alert.alert('', 'パスワードの強度が十分ではありません');
                    break;
                default:
                    Alert.alert('', error.message);
            }
            console.log(error);
        });
};

export const emailLogin = async (email, password, navigation) => {
    await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            AsyncStorage.setItem('isLogin', 'true');
            navigation.navigate('tabHome');
            console.log('Success to Login');
        })
        .catch((error) => {
            switch (error.code) {
                case 'auth/invalid-email':
                    Alert.alert('', '指定したメールアドレスは無効です');
                    break;
                case 'auth/user-disabled':
                    Alert.alert('', '指定したユーザーアカウントは無効です');
                    break;
                case 'auth/user-not-found':
                    Alert.alert(
                        '',
                        '指定したユーザーアカウントは登録されておりません'
                    );
                    break;
                case 'auth/wrong-password':
                    Alert.alert('', 'パスワードが違います');
                    break;
                default:
                    Alert.alert('', error.message);
            }
            console.log(error);
        });
};

export default firebase;
