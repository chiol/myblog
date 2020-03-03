import React from 'react'
import styled from 'styled-components'

function Tech() {
    return (
        <TechTemplate>
            <TechHeader>My Skill</TechHeader>
            <TechBody>
                <TechContainer width="40%" backColor="lightgray">
                    <TechItemLeft></TechItemLeft>
                    <TechItemLeft></TechItemLeft>
                    <TechItemLeft></TechItemLeft>
                    <TechItemLeft></TechItemLeft>
                </TechContainer>
                <TechContainer width="60%" backColor="dimgray">
                    <TechItemRight></TechItemRight>
                    <TechItemRight></TechItemRight>
                    <TechItemRight></TechItemRight>
                    <TechItemRight></TechItemRight>
                </TechContainer>
            </TechBody>
        </TechTemplate>
    )
}
interface styleTempProps {
    width: string;
    backColor: string;
}

const TechTemplate = styled.div `
    display: flex;
    flex-direction: column;
`;
const TechHeader = styled.div `
    display: flex;
    justify-content: center;
`;
const TechBody = styled.div `
    display: flex;
    width: 100%;
`;
const TechContainer = styled.div<styleTempProps> `
    display: flex;
    flex-wrap: wrap;
    width: ${(props:styleTempProps) => props.width || 0 };
    background-color: ${(props:styleTempProps) => props.backColor || "white" };
`;
const TechItemLeft = styled.div `
    flex: auto;
    min-width: 100px;
    min-height: 50px;
    margin: 10px;
`;
const TechItemRight = styled.div `
    flex: auto;
    min-height: 60px;
    margin: 10px;
`;
export default Tech
