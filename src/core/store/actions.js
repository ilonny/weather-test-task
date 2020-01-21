import {
    LOAD_CITIES,
    ADD_CITY,
    SET_CHOSEN_CITY,
    LOAD_FORECAST,
} from './constants';
export const loadCities = () => {
    return {
        type: LOAD_CITIES,
        callAPI: {
            url:
                'https://mk-s3-test-bucket.s3.eu-central-1.amazonaws.com/cities.json',
        },
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

export const loadForecast = (lat, lot) => {
    return {
        type: LOAD_FORECAST,
        callAPI: {
            url: `https://api.weather.yandex.ru/v1/forecast?lat=${lat}&lot=${lot}`,
            headers: new Headers({
                'X-Yandex-API-Key': '198c21cd-59c1-4702-9193-4de89c0cc5d5', //это дело конецчно тожк бы  в конфиг..
            }),
        },
    };
};
