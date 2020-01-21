import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {detailForecastStyles} from '../../../core/theme';
import {FlatList} from 'react-native-gesture-handler';
class DetailForecast extends Component {
    getWeekDay(date) {
        let days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
        ];
        return days[date.getDay()];
    }
    _keyExtractor = item => item.date;
    renderItem = ({item}) => {
        let date = new Date(item.date);

        const temp_day = item.parts.day_short.temp;
        const temp_night = item.parts.night_short.temp;
        return (
            <View style={detailForecastStyles.forecastRow}>
                <Text style={detailForecastStyles.text}>
                    {this.getWeekDay(date)}
                </Text>
                <View style={detailForecastStyles.forecastRow}>
                    <Text style={detailForecastStyles.text}>{temp_day}</Text>
                    <Text style={detailForecastStyles.text}> / </Text>
                    <Text style={detailForecastStyles.text}>{temp_night}</Text>
                </View>
            </View>
        );
    };
    render() {
        console.log('forecast props', this.props);
        const {city, forecast} = this.props;
        return (
            <View style={detailForecastStyles.container}>
                <Text style={detailForecastStyles.title}>{city.name}</Text>
                <Text style={detailForecastStyles.subTitle}>
                    Сейчас: {forecast.fact.temp}
                </Text>
                <FlatList
                    data={forecast.forecasts}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
export {DetailForecast};
