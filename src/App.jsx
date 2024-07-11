import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Articles from './Components/Articles/ArticleContainer'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {
  return (
    <>
    <section className='topsection'>
    <Navbar/>
    <Hero/>
    </section>
  
    <Articles/>
    <About/>
    <Subscribe/>      
    </>
  )
}

export default App
