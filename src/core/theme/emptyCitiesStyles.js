import {Platform, TextStyle, ViewStyle, StyleSheet} from 'react-native';
import {colors} from './colors';
export const emptyCitiesStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    },
    image: {
        opacity: 0.2, // возможно, правильнее было бы саму картинку сохранить с прозрачностью
        marginTop: 20,
    },
});
