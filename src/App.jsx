import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Article from './Components/Article/Article'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {
  return (
    <>
    <section className='topsection'>
    <Navbar/>
    <Hero/>
    </section>
  
    <Article/>
    <About/>
    <Subscribe/>      
    </>
  )
}

export default App
