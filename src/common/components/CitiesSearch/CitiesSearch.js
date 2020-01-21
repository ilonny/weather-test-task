import React, {Component} from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import Header from './Header';
import SearchBar from './SearchBar';
class CitiesSearch extends Component {
    bottomSheetRef = React.createRef();
    componentDidMount() {
        this.bottomSheetRef.current.snapTo(1);
    }
    renderContent = () => <SearchBar cities={this.props.cities} />;
    renderHeader = <Header />;
    render() {
        const {CloseBottomSheet, cities} = this.props;
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
