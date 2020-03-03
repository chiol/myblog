import React from 'react'
import styled from 'styled-components'
import "./Contact.scss"
function Contact() {
    return (
        <ContactTemplate>
            <ContactHeader>CONTECT ME</ContactHeader>
            <ContactBody>
                <ContactContainer>
                    <ContactFormContainer>
                        <label >
                            email:
                                <input type="text" className="form" />
                        </label>
                        <label>
                            subject:
                                <input type="text" className="form" />
                        </label>
                        <label>
                            content:
                                <textarea className="form" ></textarea>
                        </label>
                        <input type="submit" value="Submit" />
                    </ContactFormContainer>
                    <ContactInfoContainer>
                        <ContactInfoItem>
                            <div>name</div>
                            <div>김승호</div>
                        </ContactInfoItem>
                        <ContactInfoItem>
                            <div>mobile</div>
                            <div>010-6850-6952</div>
                        </ContactInfoItem>
                        <ContactInfoItem>
                            <div>e-mail</div>
                            <div>jcy6677@gmail.com</div>
                        </ContactInfoItem>
                        <ContactInfoItem>
                            <div>sns</div>
                            <div>chi__0</div>
                        </ContactInfoItem>
                    </ContactInfoContainer>
                </ContactContainer>
            </ContactBody>
        </ContactTemplate>
    )
}
const ContactTemplate = styled.div`
    display:flex;
    flex-direction: column;
`;
const ContactHeader = styled.div`
    display: flex;
    justify-content: center;
`;
const ContactBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
`;
const ContactContainer = styled.div`
    display: flex;
    box-shadow: inset 2px 2.2px 21px 0 rgba(0, 0, 0, 0.22);
    margin: 50px;
    width: 80%;
    /* flex-wrap: wrap; */
    flex-direction: row;
`;
const ContactFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: space-around;
`;
const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 50%;
    justify-content: space-around;
`;
const ContactInfoItem = styled.div`

`;

export default Contact
