import React, {PureComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationConfig} from './navigation/config';
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
            return <NavigationConfig />;
        }
    }
}

export default App;
