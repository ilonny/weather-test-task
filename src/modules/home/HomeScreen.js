import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {navigateToRoute} from '../../navigation/actions';
class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text>Home screen</Text>
            </SafeAreaView>
        );
    }
}

export {HomeScreen};
