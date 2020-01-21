//тут бы тоже разбил на компоненты, но экономя время написал в одном.
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {selectChosenCities} from '../../../core/store/selectors';
import {addCity} from '../../../core/store/actions';
import {bottomSheetStyles} from '../../../core/theme';
import {debounce} from '../../../core/helpers';
class SearchBar extends Component {
    state = {
        searchParam: '',
    };
    addCity = city => {
        this.props.addCity(city);
        this.props.CloseBottomSheet();
    };
    renderItem = ({item}) => {
        console.log('renderitem');
        return (
            <TouchableOpacity onPress={() => this.addCity(item)}>
                <View style={bottomSheetStyles.listItemContainer}>
                    <Text style={bottomSheetStyles.listItemContainerText}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };
    _keyExtractor = item => item.name;
    render() {
        const {cities, chosenCities} = this.props;
        const {searchParam} = this.state;
        let filteredCities = cities.filter(city =>
            city.name.toLowerCase().includes(searchParam.toLowerCase()),
        );
        //не отображать в поиске уже выбранные города
        console.log('cities', cities);
        console.log('searchParam', searchParam);
        console.log('filteredCities', filteredCities);
        return (
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
                {!!this.state.searchParam && (
                    <FlatList
                        data={filteredCities}
                        renderItem={this.renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                )}
            </View>
        );
    }
}
export default connect(
    state => ({
        chosenCities: selectChosenCities(state),
    }),
    dispatch => ({
        addCity: city => dispatch(addCity(city)),
    }),
)(SearchBar);
