import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {commonStyles} from '../../core/theme';
class MainLayout extends Component {
    render() {
        return (
            <SafeAreaView
                style={[commonStyles.flexMainBackground, this.props.styles]}>
                {this.props.children}
            </SafeAreaView>
        );
    }
}
export {MainLayout};
