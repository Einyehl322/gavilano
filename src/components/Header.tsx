import logo from '/images/logo-gavilano.svg'
import './Header.css'

const navItems = [
  { label: 'BIOGRAFIA', href: '#biografia' },
  { label: 'EXPERIENCIA', href: '#experiencia' },
  { label: 'MI APORTE', href: '#mi-aporte' },
  { label: 'PROPUESTAS', href: '#propuestas' },
  { label: 'ARTICULOS', href: '#articulos' },
]

function Header() {
  const irASeccion = (href: string) => {
    const targetId = href.replace('#', '')
    const target = document.getElementById(targetId)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Gavilano" />
      <nav className="header-nav">
        {navItems.map((item) => (
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
        ))}
      </nav>
    </header>
  )
}

export default Header
