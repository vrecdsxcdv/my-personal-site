import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import BackgroundFX from './components/BackgroundFX'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Interests from './components/Interests'
import MediaShelf from './components/MediaShelf'
import Gallery from './components/Gallery'
import Moments from './components/Moments'
import Quotes from './components/Quotes'
import Contact from './components/Contact'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  useEffect(() => {}, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <BackgroundFX />
        <Nav />
        <Hero />
        <AboutMe />
        <Interests />
        <MediaShelf />
        <Gallery />
        <Moments />
        <Quotes />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
