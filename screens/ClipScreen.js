import React from 'react';
import { useSelector } from 'react-redux';
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    credit: {
        marginLeft: 16,
    },
    image: {
        width: 180,
        height: 60,
        borderRadius: 0,
    },
    text: {
        fontSize: 36,
        color: 'red',
    },
});

export default ClipScreen = ({ navigation }) => {
    const user = useSelector((state) => state.user);
    const { clips } = user;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.text}>Clips</Text>
                <TouchableOpacity
                    style={styles.credit}
                    onPress={() => navigation.navigate('Credit')}
                >
                    <Image
                        source={{
                            uri:
                                'https://api.gnavi.co.jp/api/img/credit/api_180_60.gif',
                        }}
                        style={styles.image}
                        accessibilityLabel="グルメ情報検索サイト　ぐるなび"
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={clips}
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.image_url.shop_image1}
                        name={item.name}
                        address={item.address}
                        onPress={() =>
                            navigation.navigate('Store', { store: item })
                        }
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};
