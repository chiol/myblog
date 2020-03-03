import React from 'react'
import Bar from '../components/Bar'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Tech from '../components/Tech'
import About from '../components/About'

function HomePage() {
    return (
        <div>
            <Bar/>
            <Banner/>
            <About/>
            <Tech/>
            <Contact/>
        </div>
    )
}

export default HomePage
