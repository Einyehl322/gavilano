import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Agenda from './components/Agenda'
import ImageSection from './components/ImageSection'
import AporteSection from './components/AporteSection'
import HistoriasSection from './components/HistoriasSection'
import PropuestasSection from './components/PropuestasSection'
import PropuestasDetalleSection from './components/PropuestasDetalleSection'
import ArticulosSection from './components/ArticulosSection'
import SumateSection from './components/SumateSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Agenda />
        <ImageSection />
        <AporteSection />
        <HistoriasSection />
        <PropuestasSection />
        <PropuestasDetalleSection />
        <ArticulosSection />
        <SumateSection />
      </main>
      <Footer />
    </>
  )
}

export default App
