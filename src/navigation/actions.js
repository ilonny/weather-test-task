import {NavigationActions} from 'react-navigation';

export const navigateToRoute = (routeName, params) => {
    return NavigationActions.navigate({routeName, params});
};
