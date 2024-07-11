import React from 'react'
import './sectionHeader.css'
function SectionHeader({name, style,id=''}) {
  return (
    <section className='section-header-container' id={id}>
        <h3>{name}</h3>
        <span className={`bar ${style}`}></span>
    </section>
  )
}

export default SectionHeader