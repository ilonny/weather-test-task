import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationPages from '../pages';
import {HomeScreen, DetailScreen} from '../../modules';
const Pages = new NavigationPages();
export const NavigationConfig = createAppContainer(
    createStackNavigator({
        [Pages.home]: {screen: HomeScreen},
        [Pages.detail]: {screen: DetailScreen},
    }),
);
