import React from 'react';

import { InfoContainer, HorizontalInfoContainer, InfoHeaderAndTime, HorInfoContFlexEnd,
    InfoWhere, ExpDescription } from './PrintComponents';

class ListedInfoContainer extends React.Component {
    render() {
        return (
            <InfoContainer>
                <HorizontalInfoContainer>
                    <InfoHeaderAndTime>{this.props.header}</InfoHeaderAndTime>
                    <HorInfoContFlexEnd>
                        <InfoWhere>{this.props.where}</InfoWhere>
                        {this.props.from? <><span>{'\u00A0'}|{'\u00A0'}</span><InfoHeaderAndTime>{this.props.from}-{this.props.to}</InfoHeaderAndTime></> : null}
                    </HorInfoContFlexEnd>
                </HorizontalInfoContainer>
                <ExpDescription>{this.props.description}</ExpDescription>
            </InfoContainer>
        );
    }
}

export default ListedInfoContainer;