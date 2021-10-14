import React from 'react';

import { OtherInfoGroup, OtherInfoText } from './PrintComponents';

const MaterialiInconsStyles = {
    color: "#36626b"
}

class IconInfoContainer extends React.Component {
    render() {
        return (
            <OtherInfoGroup>
                <span className="material-icons" style={MaterialiInconsStyles}>{this.props.icon}</span>
                <OtherInfoText>{this.props.info}</OtherInfoText>
            </OtherInfoGroup>
        );
    }
}

export default IconInfoContainer;