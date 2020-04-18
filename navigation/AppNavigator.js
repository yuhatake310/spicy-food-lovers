import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ title: 'Register', headerTintColor: 'red' }}
            />
            <Stack.Screen
                name="LogIn"
                component={LogInScreen}
                options={{ title: 'Log in', headerTintColor: 'red' }}
            />
        </Stack.Navigator>
    );
};

const screenOption = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Search') {
            iconName = 'search';
        }

        return <FontAwesome name={iconName} size={size} color={color} />;
    },
});

const tabHome = () => {
    return (
        <Tab.Navigator screenOptions={screenOption}>
            <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    );
};

export default AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeStack}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="tabHome"
                    component={tabHome}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
