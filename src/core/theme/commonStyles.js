import {Platform, TextStyle, ViewStyle, StyleSheet} from 'react-native';
import {colors} from './colors';
export const commonStyles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    flexMainBackground: {
        flex: 1,
        backgroundColor: colors.mainBg,
    },
    emptyCitiesTitle: {
        color: colors.mainText,
        fontSize: 20,
        fontWeight: '300',
    },
    bottomButtonContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButtonIcon: {
        marginRight: 10,
    },
    bottomButtonText: {
        color: '#fff',
    },
});
