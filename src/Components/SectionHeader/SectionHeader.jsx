import React from 'react'
import './sectionHeader.css'
function SectionHeader({name, style}) {
  return (
    <section className='section-header-container'>
        <h3>{name}</h3>
        <span className={`bar ${style}`}></span>
    </section>
  )
}

export default SectionHeader