import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {
    MainLayout,
    EmptyCities,
    ScreenBottomButton,
    CitiesSearch,
} from '../../common/components';
import {selectCities, selectChosenCities} from '../../core/store/selectors';
class HomeScreen extends Component {
    state = {
        bottomSheetOpened: false,
    };
    OpenBottomSheet = () => {
        this.setState({bottomSheetOpened: true});
    };
    CloseBottomSheet = () => {
        this.setState({bottomSheetOpened: false});
    };
    render() {
        // console.log('homescreen props', this.props);
        // console.log('cities', chosenCities);
        const {chosenCities} = this.props || [];
        const {bottomSheetOpened} = this.state;
        return (
            <MainLayout styles={{layoutStyle}}>
                {chosenCities.length ? <Text>City list</Text> : <EmptyCities />}
                <ScreenBottomButton
                    icon="plus"
                    text="Добавить город"
                    action={this.OpenBottomSheet}
                />
                {bottomSheetOpened && (
                    <CitiesSearch CloseBottomSheet={this.CloseBottomSheet} />
                )}
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
