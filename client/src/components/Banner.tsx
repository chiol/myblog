import React from 'react'
import styled from 'styled-components';
import bannerImg from '../static/img/banner_img.png'

function Banner() {
    return (
        <BannerTemplete>
            <FlexContainer>
                <FlexItem>
                    <div>NOW OR NEVER</div>
                    <div>Make a new , industry 4.0 We have to creative think </div>
                </FlexItem>
                <FlexItem>
                    <img src={bannerImg} alt="hi" className="bannerImg"/>
                </FlexItem>
                <FlexItem col="column-reverse">
                    <div>I’M CODER</div>
                    <div>#coding # programming #java # web # python #git-hub</div>
                </FlexItem>
            </FlexContainer>
        </BannerTemplete>
    )
}
interface styledProp {
    col?: string
}
const BannerTemplete = styled.div `
    box-shadow: 6px 6.7px 36.6px 6.5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items:center;
    justify-content:center;
`;
const FlexContainer = styled.div `
    display: flex;
    width: 90%;
`;
const FlexItem = styled.div<styledProp> `
    width: 33.3%;
    display: flex;
    flex-direction: ${(props:styledProp) => props.col || 'column'};
    font-size:16px;
    div{
        font-size: 0.9rem;
    }
`;
export default Banner
