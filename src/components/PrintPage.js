import React from 'react';

import IconInfoContainer from './IconInfoContainer';
import ListedInfoContainer from './ListedInfoContainer';

import { Background, Header, FullName, Position, Body, Description,
    InfoListContainer, SectionHeader, OtherInfoContainer } from './PrintComponents';

class PrintPage extends React.Component {
    render() {
        const {personalInfo, eduInfo, workExpInfo} = this.props.info;

        return (
            <Background id="print-page">
                <Header>
                    <div>
                        <FullName>{personalInfo.name + " " + personalInfo.lname}</FullName>
                        <Position>{personalInfo.curRole}</Position>
                    </div>
                    <div>
                        <OtherInfoContainer>
                            {personalInfo.email? <IconInfoContainer info={personalInfo.email} icon='mail'/> : null}
                            {personalInfo.pnumber? <IconInfoContainer info={personalInfo.pnumber} icon='call'/> : null}
                            {personalInfo.adress? <IconInfoContainer info={personalInfo.adress} icon='location_on'/> : null}
                        </OtherInfoContainer>
                    </div>
                </Header>
                <Body>
                    <Description>{personalInfo.description}</Description>
                    <InfoListContainer>
                        {eduInfo.length > 1? <SectionHeader>Education</SectionHeader> : null}
                        {eduInfo.map(values => {
                            return <ListedInfoContainer header={values.degree} where={values.university} from={values.from} to={values.to} description={values.description}/>
                        })}
                    </InfoListContainer>
                    <InfoListContainer>
                        {workExpInfo.length > 1? <SectionHeader>Work Experience</SectionHeader> : null}
                        {workExpInfo.map(values => {
                            return <ListedInfoContainer header={values.position} where={values.company} from={values.from} to={values.to} description={values.description}/>
                        })}
                    </InfoListContainer>
                </Body>
            </Background>
        );
    }
}

export default PrintPage;