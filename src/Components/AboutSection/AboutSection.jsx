import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './aboutSection.css'


function About() {
  return (
   <section className='about-section'>
    <section className='about-image'>
    </section>

    <section className='about-container'>
      <SectionHeader name='About Us' style='sub-section-bar' id='articles'/>
      <p className='about-paragraph'>
      Welcome to our dronoticz, where innovation and technology converge to shape the future. We revolutionize industries and improve lives worldwide through our passion for pushing the boundaries of what robots can do. With expertise in AI, computer vision, mechanical engineering, and automation, we lead the way in the robotics revolution. Our brilliant team creates intelligent machines that seamlessly integrate into daily life, enhancing productivity, safety, and efficiency.Join us on this exciting journey as we unlock new frontiers, solve complex challenges, and shape a future where intelligent machines work hand-in-hand with humans. Discover the power of robotics and be part of the revolution.
      </p>
          </section>
   </section>
  )
}

export default About