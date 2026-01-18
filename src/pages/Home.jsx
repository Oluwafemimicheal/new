import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Project from '../components/Project'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <div className='px-5'>
        <About />
        <Project />
      </div>
        <Footer/>
    </div>
  )
}

export default Home
