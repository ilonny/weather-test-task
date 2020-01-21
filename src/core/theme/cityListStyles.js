import {Platform, TextStyle, ViewStyle, StyleSheet} from 'react-native';
import {colors} from './colors';
export const cityListStyles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255, 0.1)',
        padding: 20,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    itemContainerTitle: {
        color: '#fff',
        fontSize: 20,
    },
});
