import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import {loadForecast} from '../../core/store/actions';
import {
    MainLayout,
    ScreenBottomButton,
    DetailForecast,
} from '../../common/components';
class DetailScreen extends Component {
    city = this.props.navigation.getParam('city');
    componentDidMount() {
        const city = this.city;
        this.props.loadForecast(city.latitude, city.longitude);
    }
    render() {
        console.log('detail state', this.state);
        console.log('detail props', this.props);
        const {forecast} = this.props;
        return (
            <MainLayout styles={{layoutStyle}}>
                <DetailForecast forecast={forecast} city={this.city} />
                <ScreenBottomButton
                    text="Список городов"
                    action={() => this.props.navigation.navigate('home')}
                />
            </MainLayout>
        );
    }
}

DetailScreen = connect(
    state => ({
        forecast: state.main.forecast,
    }),
    dispatch => ({
        loadForecast: (lat, lot) => dispatch(loadForecast(lat, lot)),
    }),
)(DetailScreen);
export {DetailScreen};

const layoutStyle = {
    justifyContent: 'space-between',
};
