import React from 'react';
import styled from 'styled-components';


class PrintPage extends React.Component {
    render() {
        const {personalInfo, eduInfo, workExpInfo} = this.props.info;

        console.log(personalInfo);

        return (
            <Background id="print-page">
                <Header>
                    <div>
                        <FullName>{personalInfo.name + " " + personalInfo.lname}</FullName>
                        <Position>{personalInfo.curRole}</Position>
                    </div>
                    <div>
                        <OtherInfoContainer>
                            <OtherInfoGroup>
                                <span class="material-icons" style={MaterialiInconsStyles}>mail</span>
                                <OtherInfoText>{personalInfo.email}</OtherInfoText>
                            </OtherInfoGroup>
                            <OtherInfoGroup>
                                <span class="material-icons" style={MaterialiInconsStyles}>call</span>
                                <OtherInfoText>{personalInfo.pnumber}</OtherInfoText>
                            </OtherInfoGroup>
                            <OtherInfoGroup>
                                <span class="material-icons" style={MaterialiInconsStyles}>location_on</span>
                                <OtherInfoText>{personalInfo.adress}</OtherInfoText>
                            </OtherInfoGroup>
                        </OtherInfoContainer>
                    </div>
                </Header>
                <Body>
                    <Description>{personalInfo.description}</Description>
                    <InfoListContiner>
                        <SectionHeader>Work Experience</SectionHeader>
                        <InfoContainer>
                            <HorizontalInfoContainer>
                                <InfoHeaderAndTime>Software Nigga</InfoHeaderAndTime>
                                <HorInfoContFlexEnd>
                                    <InfoWhere>A nigga Company!</InfoWhere><span>{'\u00A0'}|{'\u00A0'}</span><InfoHeaderAndTime>2018-2020</InfoHeaderAndTime>
                                </HorInfoContFlexEnd>
                            </HorizontalInfoContainer>
                            <ExpDescription>
                            TEstehjifhjklfskljgklfjklsfjsklñdfjsklajflskgjhasjflñgdfngdfgkldfg
                            </ExpDescription>
                        </InfoContainer>
                    </InfoListContiner>
                    <InfoListContiner>
                    <SectionHeader>Education</SectionHeader>
                        <InfoContainer>
                            <HorizontalInfoContainer>
                                <InfoHeaderAndTime>Software Nigga</InfoHeaderAndTime>
                                <HorInfoContFlexEnd>
                                    <InfoWhere>A nigga Company!</InfoWhere><span>{'\u00A0'}|{'\u00A0'}</span><InfoHeaderAndTime>2018-2020</InfoHeaderAndTime>
                                </HorInfoContFlexEnd>
                            </HorizontalInfoContainer>
                            <ExpDescription>
                            TEstehjifhjklfskljgklfjklsfjsklñdfjsklajflskgjhasjflñgdfngdfgkldfg
                            </ExpDescription>
                        </InfoContainer>
                    </InfoListContiner>
                </Body>
            </Background>
        );
    }
}

export default PrintPage;