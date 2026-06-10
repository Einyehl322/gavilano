import logo from '/images/logo-gavilano.svg'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navItems = [
  { label: 'BIOGRAFIA', href: '#biografia' },
  { label: 'EXPERIENCIA', href: '#experiencia' },
  { label: 'MI APORTE', href: '#mi-aporte' },
  { label: 'PROPUESTAS', href: '#propuestas' },
  { label: 'ARTICULOS', href: '#articulos' },
]

type HeaderProps = {
  compact?: boolean
  compactLabel?: string
  compactHref?: string
}

function Header({ compact = false, compactLabel = 'Volver al inicio', compactHref = '/' }: HeaderProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const irASeccion = (href: string) => {
    const targetId = href.replace('#', '')
    const target = document.getElementById(targetId)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <header className={`header ${compact ? 'header--compact' : ''}`}>
      {compact ? (
        <>
          <Link to="/" className="header-logo-link" aria-label="Ir al inicio">
            <img src={logo} className="header-logo" alt="Gavilano" />
          </Link>
          <Link to={compactHref} className="header-back-link">
            {compactLabel}
          </Link>
        </>
      ) : (
        <>
          <img src={logo} className="header-logo" alt="Gavilano" />
          <nav className="header-nav">
            {navItems.map((item) => (
              isHomePage ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="header-nav-item"
                  onClick={(event) => {
                    event.preventDefault()
                    irASeccion(item.href)
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={`/${item.href}`} className="header-nav-item">
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </>
      )}
    </header>
  )
}

export default Header
