import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {commonStyles} from '../../../core/theme';
class AddCityButton extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={commonStyles.bottomButtonContainer}>
                    <Image
                        source={require('../../../../resources/images/plus.png')}
                        style={commonStyles.bottomButtonIcon}
                    />
                    <Text style={commonStyles.bottomButtonText}>
                        Добавить город
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export {AddCityButton};
