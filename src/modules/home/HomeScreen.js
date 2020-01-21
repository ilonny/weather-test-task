import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {MainLayout, EmptyCities} from '../../common/components';
import {selectCities} from '../../core/store/selectors';
class HomeScreen extends Component {
    render() {
        console.log('homescreen props', this.props);
        const cities = this.props.cities.entities || [];
        console.log('cities', cities);
        return (
            <MainLayout styles={{layoutStyle}}>
                {cities.length ? <Text>City list</Text> : <EmptyCities />}
            </MainLayout>
        );
    }
}
HomeScreen = connect(state => ({
    cities: selectCities(state),
}))(HomeScreen);
export {HomeScreen};

const layoutStyle = {
    justifyContent: 'space-between',
};
