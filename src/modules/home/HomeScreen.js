import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {MainLayout} from '../../common/components';
class HomeScreen extends Component {
    render() {
        return (
            <MainLayout>
                <Text>Test text in layout</Text>
            </MainLayout>
        );
    }
}

export {HomeScreen};
