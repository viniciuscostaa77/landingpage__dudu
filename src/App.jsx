import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Services from './components/Services.jsx'
import Results from './components/Results.jsx'
import CTAFinal from './components/CTAFinal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <Results />
        <CTAFinal />
      </main>

      <Footer />
    </div>
  )
}