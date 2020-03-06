import React from 'react'
import styled from 'styled-components';
import logo from '../static/img/invalid-name.png'
import "./Bar.scss";
import media, { mediaQuery } from '../config/media';
import {responsiveSize} from '../config/style';
import { Image, Navbar, Nav, Container } from 'react-bootstrap';


function Bar() {
    const test= window.innerWidth;
    return (
        // <DivBar id="test">
        //     <FlexContainer>
        //         <Image src={logo} className="m-3"/>
        //     </FlexContainer>
        //     <FlexContainer>
        //         <FlexItem>
        //             git {mediaQuery(test)}
        //         </FlexItem>
        //         <FlexItem>
        //             blog
        //         </FlexItem>
        //     </FlexContainer>

        // </DivBar>
        <Container className="px-0">
            <Navbar expand="lg" bg="light">
                <Navbar.Brand><MyLogoImg src={logo} /></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" />
                <Nav className="flex-row">
                    <Nav.Link className="mx-1"href="#git">git</Nav.Link>
                    <Nav.Link className="mx-1"href="#blog">blog</Nav.Link>
                </Nav>
            </Navbar>

        </Container>
    )
}

const DivBar = styled.div `
    display: flex;
    justify-content: space-between;
    background: lightgray;
    align-items: center;
    height: 129px;
    /* height: ${responsiveSize(129)}; */
    ${media.xxl} {
        height: 75%;
    }
    ${media.md} {
        height: 50%;
    }
    ${media.xs} {
        height: 12.5%;
    }

`;
const FlexContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;
const FlexItem = styled.div `
    margin: 1rem;
    font-family: TTSoomyungjoR;

    ${media.xl} {
        font-size: 1em;
    }
    ${media.md} {
        font-size: 0.5em;
    }

`;
const MyLogoImg = styled(Image) `
    ${media.md} {
        height: 30px;
    }
`
export default Bar
