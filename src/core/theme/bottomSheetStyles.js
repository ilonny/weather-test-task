import {Platform, TextStyle, ViewStyle, StyleSheet} from 'react-native';
import {colors} from './colors';
export const bottomSheetStyles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        backgroundColor: colors.bottomSheetDark,
        padding: 20,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainerLine: {
        width: 100,
        height: 5,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: '#fff',
        opacity: 0.1,
    },
    searchBarContainer: {
        flex: 0,
        width: '100%',
        backgroundColor: colors.bottomSheetDark,
        padding: 20,
        height: '100%',
    },
    searchBarLabel: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 10,
    },
    searchBarInput: {
        width: '100%',
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        color: '#fff',
        paddingLeft: 10,
    },
    listItemContainer: {
        padding: 10,
        marginBottom: 5,
    },
    listItemContainerText: {
        color: '#fff',
    },
});
