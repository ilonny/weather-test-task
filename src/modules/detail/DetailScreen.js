import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import {loadForecast} from '../../core/store/actions';
class DetailScreen extends Component {
    componentDidMount() {
        const city = this.props.navigation.getParam('city');
        this.props.loadForecast(city.latitude, city.longitude);
    }
    render() {
        console.log('detail state', this.state);
        console.log('detail props', this.props);
        return (
            <SafeAreaView>
                <Text>Detail screen</Text>
            </SafeAreaView>
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
