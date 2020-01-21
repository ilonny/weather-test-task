//тут бы тоже разбил на компоненты, но экономя время написал в одном.
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {bottomSheetStyles} from '../../../core/theme';
import {debounce} from '../../../core/helpers';
class SearchBar extends Component {
    state = {
        searchParam: '',
    };
    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => console.log('press', item)}>
            <View>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
    _keyExtractor = item => item.name;
    render() {
        const {cities} = this.props;
        const {searchParam} = this.state;
        const filteredCities = cities.filter(city =>
            city.name.toLowerCase().includes(searchParam.toLowerCase()),
        );
        console.log('cities', cities);
        console.log('searchParam', searchParam);
        console.log('filteredCities', filteredCities);
        return (
            <>
                <View style={bottomSheetStyles.searchBarContainer}>
                    <View>
                        <Text style={bottomSheetStyles.searchBarLabel}>
                            Введите название города
                        </Text>
                        <TextInput
                            style={bottomSheetStyles.searchBarInput}
                            onChangeText={debounce(
                                searchParam => this.setState({searchParam}),
                                200,
                            )}
                        />
                    </View>
                </View>
                <FlatList
                    data={filteredCities}
                    renderItem={this.renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </>
        );
    }
}
export default SearchBar;
