import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {commonStyles} from '../../../core/theme';
const PlusIcon = require('../../../../resources/images/plus.png');
class ScreenBottomButton extends Component {
    render() {
        const {icon, text, action} = this.props;
        let compIcon;
        switch (icon) {
            case 'plus':
                compIcon = PlusIcon;
                break;
            default:
                break;
        }
        return (
            <TouchableOpacity onPress={() => action()}>
                <View style={commonStyles.bottomButtonContainer}>
                    <Image
                        source={compIcon}
                        style={commonStyles.bottomButtonIcon}
                    />
                    <Text style={commonStyles.bottomButtonText}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export {ScreenBottomButton};
