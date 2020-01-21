import {LOAD_CITIES, ADD_CITY, SET_CHOSEN_CITY} from './constants';
export const loadCities = () => {
    return {
        type: LOAD_CITIES,
        callAPI:
            'https://mk-s3-test-bucket.s3.eu-central-1.amazonaws.com/cities.json',
    };
};

export const setChosenCity = chosenCities => {
    return {
        type: SET_CHOSEN_CITY,
        chosenCities,
    };
};

export const addCity = city => {
    return {
        type: ADD_CITY,
        city,
    };
};
