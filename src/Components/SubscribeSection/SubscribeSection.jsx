import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'

import './subscribe.css'

function SubscribeSection() {
  return (
    <section className='subscribe-section' id='subscribe'>
        <SectionHeader name='Subscribe'style='sub-section-bar-none' />
        <p className='call-to-action'>Sign-up to our newsletter</p>

      <form>
        <input type="email" id="subscribe-input" placeholder='Your email' />
        <button type='submit' className='submit-buttton'>Submit</button>
      </form>
   
    </section>
  )
}

export default SubscribeSection