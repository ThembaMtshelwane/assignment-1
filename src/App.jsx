import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutSection from './Components/AboutSection/AboutSection'
import ArticlesSection from './Components/ArticlesSection/ArticlesSection'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {
  return (
    <>
    <section className='topsection'>
    <Navbar/>
    <Hero/>
    </section>
  
   <ArticlesSection/>
    <AboutSection/>
    <Subscribe/>      
    </>
  )
}

export default App
