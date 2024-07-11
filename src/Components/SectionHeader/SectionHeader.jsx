import React from 'react'
import './sectionHeader.css'
function SectionHeader({name}) {
  return (
    <>
        <h3>{name}</h3>
        <span className='bar hero-section-bar'></span>
    </>
  )
}

export default SectionHeader