import About from './components/portfolio/About'
import Footer from './components/Footer'
import Hero2 from './components/portfolio/Hero2'
import Portfolio from './components/portfolio/Portfolio'
import Articles from './components/portfolio/Articles'
import Navbar from './components/Navbar'
import Contact from './components/portfolio/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <header className='fixed w-full top-2 z-99'>
        <Navbar />
      </header>
      <main>
        <Hero2 />
        <About />
        <Portfolio />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>

  )
}

export default App
