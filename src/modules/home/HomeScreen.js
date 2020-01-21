import React, {Component} from 'react';
import {Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {
    MainLayout,
    EmptyCities,
    ScreenBottomButton,
    CitiesSearch,
    CityList,
} from '../../common/components';
import {selectCities, selectChosenCities} from '../../core/store/selectors';
import {loadCities, setChosenCity} from '../../core/store/actions';
class HomeScreen extends Component {
    state = {
        bottomSheetOpened: false,
    };
    componentDidMount() {
        //загружаем список городов с сервера, тут по хорошему нужен прелоадер и обработка ошибки загрузки, но времени в обрез.
        AsyncStorage.getItem('chosen_cities', (err, val) => {
            console.log('async storage', val);
            if (val) {
                try {
                    this.props.setChosenCity(JSON.parse(val));
                } catch (e) {
                    console.log('crash)', e);
                }
            }
        });
        this.props.loadCities();
    }
    OpenBottomSheet = () => {
        this.setState({bottomSheetOpened: true});
    };
    CloseBottomSheet = () => {
        this.setState({bottomSheetOpened: false});
    };
    render() {
        console.log('homescreen props', this.props);
        // console.log('cities', chosenCities);
        const {chosenCities} = this.props || [];
        const {navigation} = this.props;
        const cities = this.props.cities.entities || [];
        const {bottomSheetOpened} = this.state;
        return (
            <MainLayout styles={{layoutStyle}}>
                {chosenCities.length ? (
                    <CityList cities={chosenCities} navigation={navigation} />
                ) : (
                    <EmptyCities />
                )}
                <ScreenBottomButton
                    icon="plus"
                    text="Добавить город"
                    action={this.OpenBottomSheet}
                />
                {bottomSheetOpened && (
                    <CitiesSearch
                        CloseBottomSheet={this.CloseBottomSheet}
                        cities={cities}
                    />
                )}
            </MainLayout>
        );
    }
}
HomeScreen = connect(
    state => ({
        cities: selectCities(state),
        chosenCities: selectChosenCities(state),
    }),
    dispatch => ({
        loadCities: () => dispatch(loadCities()),
        setChosenCity: cities => dispatch(setChosenCity(cities)),
    }),
)(HomeScreen);
export {HomeScreen};

const layoutStyle = {
    justifyContent: 'space-between',
};
