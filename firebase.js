import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: 'AIzaSyCJNJY18wC-JP7_oybOAgacDDusURqg034',
    authDomain: 'spicy-food-lovers.firebaseapp.com',
    databaseURL: 'https://spicy-food-lovers.firebaseio.com',
    projectId: 'spicy-food-lovers',
    storageBucket: 'spicy-food-lovers.appspot.com',
    messagingSenderId: '431015865813',
    appId: '1:431015865813:web:fbb2af417c5dfaf75e215c',
    measurementId: 'G-2FNZM68LD3',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
