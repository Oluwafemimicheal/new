import About from './components/portfolio/About'
import Footer from './components/Footer'
import Hero2 from './components/portfolio/Hero2'
import Portfolio from './components/portfolio/Portfolio'
import Articles from './components/portfolio/Articles'
import Navbar from './components/Navbar'
import Contact from './components/portfolio/Contact'

const App = () => {
  return (
    <div>
      <div className='fixed w-full top-2 z-99'>
        <Navbar />
      </div>
      <Hero2 />
      <About />
      <Portfolio />
      <Articles />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
