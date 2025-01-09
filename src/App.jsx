import About from "./sections/About"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"


const App = () => {
  return (
    <main className='mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App