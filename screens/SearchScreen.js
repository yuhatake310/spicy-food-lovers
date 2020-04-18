import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Search</Text>
        </SafeAreaView>
    );
};

export default SearchScreen;
