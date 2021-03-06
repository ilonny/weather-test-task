import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {emptyCitiesStyles} from '../../../core/theme';
class EmptyCities extends Component {
    render() {
        return (
            <View style={emptyCitiesStyles.container}>
                <Text style={emptyCitiesStyles.title}>
                    Вы еще не добавили{'\n'}ни одного города
                </Text>
                <Image
                    source={require('../../../../resources/images/cloud.png')}
                    style={emptyCitiesStyles.image}
                />
            </View>
        );
    }
}
export {EmptyCities};
