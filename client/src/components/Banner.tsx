import React from 'react'
import styled from 'styled-components';
import bannerImg from '../static/img/banner_img.png'
import './Banner.scss';
function Banner() {
    return (
        <BannerTemplete>
            <FlexContainer color="red" loc="flex-start">
                <div>NOW OR NEVER</div>
                <div>Make a new , industry 4.0 We have to creative think </div>
            </FlexContainer>
            <FlexContainer color="blue" loc="center">
                <img src={bannerImg} alt="hi" className="bannerImg"/>
            </FlexContainer>
            <FlexContainer color="yellow" loc="flex-end">
                <div>1</div>
                <div>2</div>
            </FlexContainer>
        </BannerTemplete>
    )
}
interface styledProp {
    color: string,
    loc: string
}
const BannerTemplete = styled.div `
    box-shadow: 6px 6.7px 36.6px 6.5px rgba(0, 0, 0, 0.15);
    height: 200px;
    display: flex;
    align-items:center;
    justify-content:center;
`;
const FlexContainer = styled.div<styledProp> `
    width: 50px;
    height: 100px;
    display: flex;
    background: ${props => props.color || 'blue'};
    flex-direction: column;
    justify-content: ${props => props.loc || 'center'};
`;
export default Banner
