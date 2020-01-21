import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {MainLayout, EmptyCities, AddCityButton} from '../../common/components';
import {selectCities, selectChosenCities} from '../../core/store/selectors';
class HomeScreen extends Component {
    state = {
        bottomSheetOpen: false,
    };
    render() {
        console.log('homescreen props', this.props);
        const {chosenCities} = this.props || [];
        console.log('cities', chosenCities);
        return (
            <MainLayout styles={{layoutStyle}}>
                {chosenCities.length ? <Text>City list</Text> : <EmptyCities />}
                <AddCityButton />
            </MainLayout>
        );
    }
}
HomeScreen = connect(state => ({
    cities: selectCities(state),
    chosenCities: selectChosenCities(state),
}))(HomeScreen);
export {HomeScreen};

const layoutStyle = {
    justifyContent: 'space-between',
};
