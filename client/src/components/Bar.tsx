import React from 'react'
import styled from 'styled-components';
import logo from '../static/img/invalid-name.png'
import "./Bar.scss";
function Bar() {
    return (
        <DivBar>
            <FlexContainer>
                <img src={logo} className="logo" />
                <FlexItem>
                    menu
                </FlexItem>
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
    background: lightgray;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const FlexContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FlexItem = styled.div `
    margin: 10px;
    font-family: TTSoomyungjoR;
`
export default Bar
