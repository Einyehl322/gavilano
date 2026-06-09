import './PropuestasSection.css'

function PropuestasSection() {
  return (
    <section className="propuestas-section" id="propuestas">
      <p className="propuestas-text">MIS PROPUESTAS 2026 — 2030</p>
      <div className="propuestas-subtitle-block">
        <p className="propuestas-subtitle-line">ORDEN Y</p>
        <p className="propuestas-subtitle-line propuestas-subtitle-line-2">OPORTUNIDADES</p>
        <p className="propuestas-subtitle-line propuestas-subtitle-line-3">PARA LOS</p>
      </div>
      <p className="propuestas-subtitle-italic">CARMELINOS</p>
      <div className="propuestas-description-block">
        <p className="propuestas-description-text">
          <strong>Quiero un distrito donde los vecinos vivan tranquilos,</strong> donde la<br />
          municipalidad funcione, llegue y<br />
          proteja a cada familia. Un distrito que<br />
          vuelva al camino del desarrollo.
        </p>
      </div>
    </section>
  )
}

export default PropuestasSection
