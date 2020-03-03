import React from 'react'
import styled from 'styled-components';
import logo from '../static/img/invalid-name.png'
import "./Bar.scss";
import media from '../util/styles/media';
function Bar() {
    return (
        <DivBar>
            <FlexContainer>
                <Logo src={logo}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem>
                    git
                </FlexItem>
                <FlexItem>
                    blog
                </FlexItem>
            </FlexContainer>
        </DivBar>
    )
}

const DivBar = styled.div `
    display: flex;
    justify-content: space-between;
    background: lightgray;
    align-items: center;
    height: 5rem;
`;
const FlexContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FlexItem = styled.div `
    margin: 1rem;
    font-family: TTSoomyungjoR;
`;
const Logo = styled.img `
    height: 3rem;
    margin: 1rem;
`;
export default Bar
