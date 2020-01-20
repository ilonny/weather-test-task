import React, {Component} from 'react';
import {Text} from 'react-native';
import {commonStyles} from '../../core/theme';
class EmptyCities extends Component {
    render() {
        return <Text>Вы еще не добавили ни одного города</Text>;
    }
}
export {EmptyCities};
