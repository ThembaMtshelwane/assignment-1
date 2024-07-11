import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutSection from './Components/AboutSection/AboutSection'
import ArticlesSection from './Components/ArticlesSection/ArticlesSection'
import SubscribeSection from './Components/SubscribeSection/SubscribeSection'

function App() {
  return (
    <>
    <section className='topsection'>
    <Navbar/>
    <Hero/>
    </section>
  
   <ArticlesSection/>
    <AboutSection/>
    <SubscribeSection/>      
    </>
  )
}

export default App
