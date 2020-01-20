import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {MainLayout} from '../../common/components';
import {selectCities} from '../../core/store/selectors';
class HomeScreen extends Component {
    render() {
        console.log('homescreen props', this.props);
        const {citites} = this.props.citites.entities || [];
        return (
            <MainLayout styles={{layoutStyle}}>
                <Text>Test text in layout</Text>
            </MainLayout>
        );
    }
}
HomeScreen = connect(state => ({
    citites: selectCities(state),
}))(HomeScreen);
export {HomeScreen};

const layoutStyle = {
    justifyContent: 'space-between',
};
