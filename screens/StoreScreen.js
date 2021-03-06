import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import ClipButton from '../components/ClipButton';
import Loading from '../components/Loading';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default StoreScreen = ({ route }) => {
    const { store } = route.params;

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const { clips } = user;

    const isClipped = () => {
        return clips.some((clip) => clip.url === store.url);
    };

    const toggleClip = () => {
        if (isClipped()) {
            dispatch(deleteClip({ clip: store }));
        } else {
            dispatch(addClip({ clip: store }));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ClipButton onPress={toggleClip} enabled={isClipped()} />
            <WebView
                source={{ uri: store.url }}
                startInLoadingState={true}
                renderLoading={() => <Loading />}
            />
        </SafeAreaView>
    );
};
