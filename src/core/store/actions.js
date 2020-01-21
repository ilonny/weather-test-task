import {LOAD_CITIES} from './constants';
export const loadCities = () => {
    return {
        type: LOAD_CITIES,
        callAPI:
            'https://mk-s3-test-bucket.s3.eu-central-1.amazonaws.com/cities.json',
    };
};
