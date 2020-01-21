import React, {Component} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {cityListStyles} from '../../../core/theme';
class CityList extends Component {
    _keyExtractor = item => item.name;
    renderItem = ({item}) => (
        <TouchableOpacity
            onPress={() =>
                this.props.navigation.navigate('detail', {city: item})
            }>
            <View style={cityListStyles.itemContainer}>
                <Text style={cityListStyles.itemContainerTitle}>
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
    render() {
        const {cities} = this.props;
        console.log('cities', this.props);
        return (
            <FlatList
                data={cities}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

export {CityList};
