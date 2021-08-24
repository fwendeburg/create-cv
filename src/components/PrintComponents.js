import styled from "styled-components";

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Header = styled.div`
    height: min(15vh, max-content);
    width: 80%;
    border-bottom: 3px solid #b0ccd4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const FullName = styled.h1`
    font-size: 33px;
    margin-top: 60px;
    font-weight: 700;
    text-transform: uppercase;
    color: #36626b;
`

const Position = styled.h2`
    font-size: 22px;
    font-weight: 400;
    margin-top: 5px;
    color: #747f82;
`

const Body = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
`

const Description = styled.p`
    font-size: 16px;
    transform: translateY(-5px);
    font-weight: 200;
    text-align: justify;
`

const InfoListContiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
`

const SectionHeader = styled.h3`
    margin-top: 10px;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    color: #377ea4;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

const HorizontalInfoContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const HorInfoContFlexEnd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const ExpDescription = styled.p`
    margin-top: 5px;
    font-size: 15px;
    font-weight: 300;
    text-align: justify;
`

const InfoHeaderAndTime = styled.p`
    font-size: 17px;
    font-weight: 500;
`

const InfoWhere = styled.p`
    font-size: 17px;
    font-weight: 300;
    color: #5e5e5e;
`

const OtherInfoContainer = styled.div`
    margin-top: 60px;
    width: max-content;
    max-width: 250px;
    display: flex;
    justify-self: flex-end;
    flex-direction: column;
    justify-content: space-between;
`

const OtherInfoGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 10px;
`

const OtherInfoText = styled.p`
    margin-left: 10px;
    font-size: 16px;
`

export {Background, Header, FullName, Position, Body, Description, InfoListContiner,
    SectionHeader, InfoContainer, HorizontalInfoContainer, HorInfoContFlexEnd,
    ExpDescription, InfoHeaderAndTime, InfoWhere, OtherInfoContainer, OtherInfoGroup,
OtherInfoText, MaterialiInconsStyles}