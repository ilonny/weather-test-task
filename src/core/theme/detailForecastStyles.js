import {Platform, TextStyle, ViewStyle, StyleSheet} from 'react-native';
import {colors} from './colors';
export const detailForecastStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '600',
    },
    subTitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 50,
    },
    forecastRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    text: {
        color: '#fff',
    },
});
