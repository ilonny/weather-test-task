import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {MainLayout} from '../../common/components';
import {selectCities} from '../../core/store/selectors';
class HomeScreen extends Component {
    render() {
        return (
            <MainLayout>
                <Text>Test text in layout</Text>
            </MainLayout>
        );
    }
}
HomeScreen = connect(state => ({
    citites: selectCities(state),
}))(HomeScreen);
export {HomeScreen};
