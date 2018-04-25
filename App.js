import React from 'react';
import { YellowBox } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import TestScreen from './Test';

// TEMPORARY FIX FOR REACT NAVIGATION ISSUE
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Test: {
            screen: TestScreen,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#0f69f4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
