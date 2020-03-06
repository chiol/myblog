import React from 'react'
import Bar from '../components/Bar'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Tech from '../components/Tech'
import About from '../components/About'
import { Container } from 'react-bootstrap'

function HomePage() {
    return (
        <div>
            <Bar/>
            <Banner/>
            <Container className="bg-light">
                <About />
                <Tech/>
                <Contact/>
                
            </Container>
        </div>
    )
}
export default HomePage
