import React from 'react'
import styled from 'styled-components';
import bannerImg from '../static/img/banner_img.png'
import { Container, Row, Col, Image } from 'react-bootstrap';
import media from '../config/media';
import "./Banner.scss"
function Banner() {
    return (

        // <BannerTemplete>
        //     <FlexContainer>
        //         <FlexItem>
        //             <h1>NOW OR NEVER</h1>
        //             <h4>Make a new , industry 4.0 We have to creative think </h4>
        //         </FlexItem>
        //         <FlexItem>
        //             <img src={bannerImg} alt="hi" className="bannerImg" />
        //         </FlexItem>
        //         <FlexItem col="column-reverse">
        //             <h1>I’M CODER</h1>
        //             <h4>#coding # programming #java # web # python #git-hub</h4>
        //         </FlexItem>
        //     </FlexContainer>
        // </BannerTemplete>
        <Container className="shadow">
            <Row className="">
                <Col className="col ">
                     <MyH1>NOW OR NEVER</MyH1>
                     <MyH4>Make a new , industry 4.0 We have to creative think </MyH4>
                  </Col>
                <Col className="col  ">
                    <Image className="mw-100" src={bannerImg}/>
                </Col>
                <Col className="col  d-flex flex-column-reverse">
                     <MyH1>I’M CODER</MyH1>
                     <MyH4>#coding # programming #java # web # python #git-hub</MyH4>

                </Col>
            </Row>

        </Container>
    )
}
interface styledProp {
    col?: string
}
const BannerTemplete = styled.div`
    box-shadow: 6px 6.7px 36.6px 6.5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items:center;
    justify-content:center;
`;
const FlexContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
`;
const FlexItem = styled.div<styledProp> `
    display: flex;
    flex-direction: ${(props: styledProp) => props.col || 'column'};
`;
const MyH1 = styled.h1 `
    ${media.xl} {
        font-size: 2rem;
    }
    ${media.md} {
        font-size: 1rem;
    }
`
const MyH4 = styled.h4 `
    ${media.xl} {
        font-size: 1rem;
    }
    ${media.md} {
        font-size: 0.5rem;
    }
`
export default Banner
