import React from 'react'
import Article from './Article/Article'
import SectionHeader from '../SectionHeader/SectionHeader'
import {articleInformation} from '../../data'

import './articlesSection.css'
function ArticleSection() {
  return (
    <section className='articles-section'>
        <SectionHeader name='LATEST ARTICLES'style='sub-section-bar'/>
        <ul className='articles-list'>
           {/* {articleInformation.map(article => {
                  <li>
                    <Article imageURL={article.imageURL} imageName={article.imageName} title={article.title} />
                  </li>
                  // console.log(article.imageName)
           })}  */}
           <li>
             <Article 
            imageURL={articleInformation[0].imageURL}
            imageName={articleInformation[0].imageName}
            title={articleInformation[0].title}/>
           </li>

           <li>
             <Article 
            imageURL={articleInformation[1].imageURL}
            imageName={articleInformation[1].imageName}
            title={articleInformation[1].title}/>
           </li>

           <li>
             <Article 
            imageURL={articleInformation[2].imageURL}
            imageName={articleInformation[2].imageName}
            title={articleInformation[2].title}/>
           </li>

           <li>
             <Article 
            imageURL={articleInformation[3].imageURL}
            imageName={articleInformation[3].imageName}
            title={articleInformation[3].title}/>
           </li>
           


          
        </ul>
     
    </section>
  )
}

export default ArticleSection