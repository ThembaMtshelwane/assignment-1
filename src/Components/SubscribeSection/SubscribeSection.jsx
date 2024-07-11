import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'

import './subscribe.css'

function SubscribeSection() {
  return (
    <section className='subscribe-section' id='subscribe'>
        <SectionHeader name='Subscribe'style='sub-section-bar-none' />
        <h2>Sign-up to our newsletter</h2>

      <form>
        <input type="email" id="subscribe-input" placeholder='Your email' />
        <button>Submit</button>
      </form>
   
    </section>
  )
}

export default SubscribeSection