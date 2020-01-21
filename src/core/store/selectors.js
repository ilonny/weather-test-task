import {createSelector} from 'reselect';
export const selectCities = state => {
    return state.main.cities;
};

export const selectChosenCities = state => {
    return state.main.chosenCities;
};
