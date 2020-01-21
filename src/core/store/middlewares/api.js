import {START, SUCCESS} from '../constants';
import {call} from 'react-native-reanimated';
export default store => next => action => {
    const {callAPI, ...rest} = action;
    if (!callAPI) {
        next(rest);
    } else {
        next({
            ...rest,
            type: action.type + START,
        });
        fetch(callAPI.url, callAPI.headers && {headers: callAPI.headers})
            .then(res => res.json())
            .then(response => {
                next({
                    ...rest,
                    response,
                    type: action.type + SUCCESS,
                });
            })
            .catch(error => {
                next({
                    ...rest,
                    error,
                    type: action.type + FAIL,
                });
            });
    }
};
