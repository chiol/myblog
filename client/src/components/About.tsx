import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <AboutTemplete>
            <AboutHeader>
                About Me
            </AboutHeader>
            <AboutBody>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </AboutBody>
        </AboutTemplete>
    )
}

const AboutTemplete = styled.div `
    height: 200px;
    display: flex;
    flex-direction:column;
    border: 1px solid black;
`;
const AboutHeader = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;
const AboutBody = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 160px;
`;
export default About
