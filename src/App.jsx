import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Music from './components/Music'
import Experience from './components/Experience'
import Tour from './components/Tour'
import Community from './components/Community'
import Booking from './components/Booking'
import Press from './components/Press'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <main className="space-y-0">
        <About />
        <Music />
        <Experience />
        <Tour />
        <Community />
        <Booking />
        <Press />
      </main>
      <Footer />
    </div>
  )
}

export default App