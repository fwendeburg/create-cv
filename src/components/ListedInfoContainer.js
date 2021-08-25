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
                        <InfoWhere>{this.props.where}</InfoWhere><span>{'\u00A0'}|{'\u00A0'}</span><InfoHeaderAndTime>{new Date(this.props.from).getFullYear()}-{new Date(this.props.to).getFullYear()}</InfoHeaderAndTime>
                    </HorInfoContFlexEnd>
                </HorizontalInfoContainer>
                <ExpDescription>{this.props.description}</ExpDescription>
            </InfoContainer>
        );
    }
}

export default ListedInfoContainer;