import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Loading from '../components/Loading';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default GnaviCreditScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView
                source={{ uri: 'https://api.gnavi.co.jp/api/scope/' }}
                startInLoadingState={true}
                renderLoading={() => <Loading />}
            />
        </SafeAreaView>
    );
};
