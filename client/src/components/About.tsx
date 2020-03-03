import React from 'react'
import styled from 'styled-components'
import aboutImg1 from '../static/img/about1.png';
import aboutImg2 from '../static/img/about2.png';
function About() {
    return (
        <AboutTemplete>
            <AboutHeader>
                About Me
            </AboutHeader>
            <AboutBody>
                <AboutContainer>
                    <AboutItem>
                        <img src={aboutImg1} alt="hi" />
                    </AboutItem>
                    <AboutItem>
                        <img src={aboutImg2} alt="hi" />
                    </AboutItem>
                    <AboutItem>
                    <div>CONTENTS</div>
                    <div>나는 이다 승호. 어쩌구 저쩌구 이고 이블로그에서는 ~~을 주로 만든다. 
내꿈은 프로그래머이고 깃을 다룬다 뭐를 한다 ㅎ랄라랄라  
텍스트미 메리 크리스마스 ~! 이제 크리스마스가 코 앞 인데 
종강이 더 빠름! 개좋다 종강까지 한달도 안남았는데 한달이 너무
긴것같다 나 좀 살려주라 승호 블로그를 만드는 중인데 
여기 무슨내용이 들어가려나 승호가 이블로그가 맘에 들어야 할텐데..
랄라라라 라~라라라 라라랄랄라라라 </div>
                    </AboutItem>
                </AboutContainer>
            </AboutBody>
        </AboutTemplete>
    )
}

const AboutTemplete = styled.div `
    display: flex;
    flex-direction:column;
`;
const AboutHeader = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;
const AboutBody = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;
const AboutContainer = styled.div `
    display: flex;
    width: 90%;
`;
const AboutItem = styled.div `
    width: 33.3%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export default About
