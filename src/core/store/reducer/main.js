import {AsyncStorage} from 'react-native'; //жесткий косяк
import {
    START,
    SUCCESS,
    LOAD_CITIES,
    ADD_CITY,
    SET_CHOSEN_CITY,
} from '../constants';
const initialState = {
    cities: {
        loaded: false,
        loading: false,
        entities: [],
    },
    chosenCities: [],
};

export default (mainState = initialState, action) => {
    switch (action.type) {
        case LOAD_CITIES + START: {
            return {
                ...mainState,
                loading: true,
            };
        }
        case LOAD_CITIES + SUCCESS: {
            return {
                ...mainState,
                cities: {
                    ...mainState.cities,
                    loading: false,
                    loaded: true,
                    entities: action.response,
                },
            };
        }
        case ADD_CITY: {
            const cCities = [...mainState.chosenCities, action.city];
            AsyncStorage.setItem('chosen_cities', JSON.stringify(cCities));
            return {
                ...mainState,
                chosenCities: cCities,
            };
        }
        case SET_CHOSEN_CITY: {
            return {
                ...mainState,
                chosenCities: action.chosenCities,
            };
        }
        default:
            return mainState;
    }
};
