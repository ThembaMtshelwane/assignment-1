import React from 'react'
import './hero.css'
import SectionHeader from '../SectionHeader/SectionHeader'

function Hero() {
  return (
    <section className='heroContainer'>
    <h1>DRONOTICZ</h1>
    <SectionHeader name='The Era of Drones'/>
    <span className='bar'></span>
    </section>
  )
}

export default Hero