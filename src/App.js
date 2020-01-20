import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import {NavigationConfig} from './navigation/config';
import store from './core/store';
import {Provider} from 'react-redux';
class App extends PureComponent {
    state = {
        isError: false,
    };
    componentDidCatch(errorInfo) {
        console.warn('UnhandledError with Info: ', errorInfo);
        this.setState({isError: true});
    }
    render() {
        if (this.state.isError) {
            return <Text>Critical Error Stub.</Text>;
        } else {
            return (
                <Provider store={store}>
                    <NavigationConfig />
                </Provider>
            );
        }
    }
}

export default App;
