import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    TextInput,
    Button,
    FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import { TouchableOpacity } from 'react-native-gesture-handler';

const URL = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${Constants.manifest.extra.gnaviApiKey}`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
    textInput: {
        fontSize: 14,
        color: 'black',
        marginTop: 16,
        width: '100%',
        height: 52,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    searchButton: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 6,
        width: '100%',
        height: 52,
        marginTop: 16,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const SearchScreen = ({ navigation }) => {
    const [word, setWord] = useState();
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchStores = async () => {
        setLoading(true);
        try {
            if (word) {
                const response = await axios.get(URL + `&freeword="${word}"`);
                setStores(response.data.rest);
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.text}>Search</Text>
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
            <TextInput
                style={styles.textInput}
                value={word}
                onChangeText={(text) => setWord(text)}
                editable
                maxLength={50}
                placeholder="Search all stores"
                autoCapitalize="none"
            />
            <View style={styles.searchButton}>
                <Button
                    title="SEARCH"
                    color="#FFFFFF"
                    onPress={() => searchStores(word)}
                />
            </View>
            <FlatList
                data={stores}
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
            {loading && <Loading />}
        </SafeAreaView>
    );
};

export default SearchScreen;
