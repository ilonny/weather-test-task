import React, {Component} from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import Header from './Header';
import SearchBar from './SearchBar';
class CitiesSearch extends Component {
    bottomSheetRef = React.createRef();
    componentDidMount() {
        this.bottomSheetRef.current.snapTo(1);
    }
    renderContent = () => <SearchBar />;
    renderHeader = <Header />;
    render() {
        const {CloseBottomSheet} = this.props;
        return (
            <BottomSheet
                ref={this.bottomSheetRef}
                snapPoints={[0, '90%']}
                initialSnap={0}
                renderContent={this.renderContent}
                renderHeader={Header}
                onCloseEnd={CloseBottomSheet}
            />
        );
    }
}
export {CitiesSearch};
