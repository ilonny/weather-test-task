import {START, SUCCESS, LOAD_CITIES} from '../constants';
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
        default:
            return mainState;
    }
};
