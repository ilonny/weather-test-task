import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {commonStyles} from '../../core/theme';
class MainLayout extends Component {
    render() {
        console.log(commonStyles);
        return (
            <SafeAreaView style={commonStyles.flexMainBackground}>
                {this.props.children}
            </SafeAreaView>
        );
    }
}
export {MainLayout};
