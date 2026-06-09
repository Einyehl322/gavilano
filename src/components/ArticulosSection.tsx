import './ArticulosSection.css'
import { asset } from '../utils/asset'

const articles = [
  {
    image: 'tombitos.png',
    titleBefore: 'Seguridad como Cimiento del Desarrollo: ',
    titleBold: 'La historia del cuerpo de Serenazgo Municipal',
    desc: 'Es un error común pensar que la seguridad es un fin en sí mismo. En realidad, es el suelo sobre el cual se construye todo lo demás.',
  },
  {
    image: 'alcalde..png',
    titleBefore: 'Educación y Tecnología: ',
    titleBold: 'Apostando por el futuro de los estudiantes carmelinos',
    desc: 'En un distrito como el nuestro, Carmen de la Legua Reynoso, la escuela no puede ser solo un lugar de tránsito; debe ser el centro de una transformación real.',
  },
  {
    image: 'trazado.png',
    titleBefore: 'Seguridad Digital: ',
    titleBold: 'El Cimiento Tecnológico que Transformó Carmen de la Legua Reynoso',
    desc: 'Hubo un tiempo en que hablar de "Internet inalámbrico" en una plaza pública parecía una idea extraída de una novela de ciencia ficción, especialmente para un distrito con los desafíos de Carmen de la Legua Reynoso.',
  },
]

const cardBases = [520, 819, 1118]

function ArticulosSection() {
  return (
    <section className="articulos-section" id="articulos">
      <p className="articulos-heading">MIS ARTÍCULOS</p>
      <div className="articulos-subtitle-block">
        <p className="articulos-subtitle-line">IDEAS PARA LEVANTAR</p>
        <p className="articulos-subtitle-italic">NUESTRO DISTRITO</p>
      </div>

      <p className="articulos-view-all">
        <span className="articulos-view-all-text">VER TODOS</span>
        <span className="articulos-view-all-arrow" aria-hidden="true" />
      </p>

      {articles.map((article, i) => {
        const base = cardBases[i]
        const stackedTitle = true
        return (
          <div key={i}>
            <div className="articulos-divider" style={{ top: i === 2 ? base - 50 : base - 20 }} />
            <div className="articulos-card-bg" style={{ top: base }} />
            <div className="articulos-image" style={{ top: base, backgroundImage: `url(${asset(article.image)})` }} />
            <p className="articulos-analisis" style={{ top: base + 63 }}>ANÁLISIS</p>
            <p className="articulos-title" style={{ top: base + (i === 1 ? -6 : i === 2 ? -31 : 0) }}>
              <span className="articulos-title-red">{article.titleBefore}</span>
              {stackedTitle ? <br /> : null}
              <strong className="articulos-title-bold-dark">{article.titleBold}</strong>
            </p>
            <p className="articulos-date" style={{ top: base + (i >= 1 ? 14 : 0) }}>23 MAYO 2026</p>
            <p className="articulos-min" style={{ top: base + 45 + (i >= 1 ? 14 : 0) }}>6 MIN</p>
            <p className="articulos-desc" style={{ top: base + 65 + (i === 1 ? 23 : i === 2 ? -1 : 0) }}>
              {article.desc}
            </p>
            <p className="articulos-nota" style={{ top: base + 150 + (i >= 1 ? 14 : 0) }}>
              LEER NOTA COMPLETA
              <span className="articulos-nota-arrow" aria-hidden="true" />
            </p>
            {i === 0 ? <div className="articulos-divider" style={{ top: base + 263 }} /> : null}
            {(i === 0 || i === 1 || i === 2) ? <div className="articulos-divider" style={{ top: base + 246 }} /> : null}
          </div>
        )
      })}
    </section>
  )
}

export default ArticulosSection
