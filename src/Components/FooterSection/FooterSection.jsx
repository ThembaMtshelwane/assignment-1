import React from 'react'
import AboutLink from '../Links/AboutLink'
import ArticleLink from '../Links/ArticleLink'
import SubscribeButton from '../Buttons/SubscribeButton'
import './footer.css'

function FooterSection() {
  return (
    <footer>
      <section className='social-links'>
        <section className='social-link'></section>
        <section className='social-link'></section>
        <section className='social-link'></section>
      </section>
      <section className='nav-links'>
      <AboutLink name="About Us" />
      <ArticleLink />
      <SubscribeButton />
      </section>
    </footer>
  )
}

export default FooterSection