import './Footer.css'

const linkColumns = [
  [
    { label: 'biografía', href: '#biografia' },
    { label: 'experiencia', href: '#experiencia' },
    { label: 'mi aporte', href: '#mi-aporte' },
  ],
  [
    { label: 'propuestas', href: '#propuestas' },
    { label: 'artículos', href: '#articulos' },
  ],
]

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const irASeccion = (href: string) => {
    const targetId = href.replace('#', '')
    const target = document.getElementById(targetId)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-group-icon" aria-hidden="true" />
        <p className="footer-links-label footer-links-label--primary" aria-hidden="true">Enlaces</p>
        <p className="footer-links-label footer-links-label--secondary" aria-hidden="true">Enlaces</p>

        {linkColumns.map((column, index) => (
          <div
            className={`footer-links ${index === 0 ? 'footer-links--primary' : 'footer-links--secondary'}`}
            key={`footer-column-${index}`}
          >
            {column.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  irASeccion(item.href)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-component-icon" aria-hidden="true" />

        <div className="footer-qr" aria-label="QR code">
          <div className="footer-qr-box">
            <img src="/images/qr.png" alt="QR" className="footer-qr-image" />
          </div>
        </div>

        <button className="scroll-top" type="button" onClick={scrollToTop} aria-label="Volver arriba">
          <img src="/images/flechaaup.png" alt="" className="scroll-top-image" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
