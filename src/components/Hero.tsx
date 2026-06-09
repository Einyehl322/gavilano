import './Hero.css'
import { asset } from '../utils/asset'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">EXPERIENCIA</h1>
        <p className="hero-subtitle">PARA</p>
        <p className="hero-subtitle2">SERVIR</p>
      </div>
      <button className="hero-button">
        <span className="hero-button-text">CONOCE MI HISTORIA</span>
        <img src={asset('Trazado88.png')} alt="" className="hero-button-icon" />
      </button>
      <div className="hero-badge" aria-hidden="true" />
    </section>
  )
}

export default Hero
