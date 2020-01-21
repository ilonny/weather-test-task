import {createSelector} from 'reselect';
export const selectCities = state => {
    return state.main.cities;
};
