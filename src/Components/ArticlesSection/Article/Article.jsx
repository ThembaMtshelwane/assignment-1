import React from 'react'
import './article.css'


function Article({imageURL,imageName, title}) {
  return (
    <section className='article-card'>
        <img src={imageURL} alt={imageName}/>
        <span className='article-bar'></span>
        <p>{title}</p>
    </section>
  )
}

export default Article