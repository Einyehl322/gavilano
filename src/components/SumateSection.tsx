import './SumateSection.css'
import { asset } from '../utils/asset'

function SumateSection() {
  return (
    <section className="sumate-section">
      <div className="sumate-parallax" aria-hidden="true" />
      <p className="sumate-heading">SÚMATE</p>
      <div className="sumate-subtitle-block">
        <p className="sumate-subtitle-line">EL DISTRITO QUE</p>
        <p className="sumate-subtitle-line sumate-subtitle-line-2">CONSTRUYE</p>
        <p className="sumate-subtitle-italic">CONTIGO</p>
      </div>
      <div className="sumate-desc-block">
        <p className="sumate-desc-title">Tu voz también importa.</p>
        <p className="sumate-desc-text">Escríbeme, comparte tu propuesta o súmate a este camino por Carmen de la Legua Reynoso.</p>
      </div>
      <form className="sumate-white-box" aria-label="Formulario de contacto" onSubmit={(event) => event.preventDefault()}>
        <label className="sumate-box-label" htmlFor="sumate-nombres" style={{ left: 47, top: 59 }}>NOMBRES</label>
        <label className="sumate-box-label" htmlFor="sumate-apellidos" style={{ left: 369, top: 59 }}>APELLIDOS</label>
        <input id="sumate-nombres" name="nombres" className="sumate-box-placeholder" style={{ left: 47, top: 98, width: 300 }} placeholder="Tu nombre" type="text" autoComplete="given-name" />
        <input id="sumate-apellidos" name="apellidos" className="sumate-box-placeholder" style={{ left: 369, top: 98, width: 300 }} placeholder="Tus apellidos" type="text" autoComplete="family-name" />
        <div className="sumate-box-divider" style={{ left: 47, width: 300 }} />
        <div className="sumate-box-divider" style={{ left: 369, width: 300 }} />
        <label className="sumate-box-label-sm" htmlFor="sumate-correo" style={{ left: 50, top: 167 }}>CORREO</label>
        <label className="sumate-box-label-sm" htmlFor="sumate-telefono" style={{ left: 369, top: 167 }}>TELÉFONO</label>
        <input id="sumate-correo" name="correo" className="sumate-box-placeholder-sm" style={{ left: 50, top: 207, width: 300 }} placeholder="tu@correo.com" type="email" autoComplete="email" />
        <input id="sumate-telefono" name="telefono" className="sumate-box-placeholder-sm" style={{ left: 369, top: 207, width: 300 }} placeholder="+51 000 000 000" type="tel" autoComplete="tel" />
        <label className="sumate-box-label-sm" htmlFor="sumate-motivo" style={{ left: 50, top: 276 }}>MOTIVO DEL MENSAJE</label>
        <select id="sumate-motivo" name="motivo" className="sumate-box-value sumate-box-select" style={{ left: 50, top: 317, width: 300 }} defaultValue="" required>
          <option value="" disabled>
            Seleccione
          </option>
          <option value="quiero-sumarme">Quiero sumarme</option>
          <option value="mas-informacion">Deseo más información</option>
          <option value="tengo-propuesta">Tengo una propuesta</option>
          <option value="otro">Otro</option>
        </select>
        <div className="sumate-box-divider" style={{ left: 50, top: 348, width: 300 }} />
        <div className="sumate-box-divider" style={{ left: 369, top: 348, width: 300 }} />
        <label className="sumate-box-label-sm" htmlFor="sumate-mensaje" style={{ left: 50, top: 385 }}>MENSAJE OPCIONAL</label>
        <textarea id="sumate-mensaje" name="mensaje" className="sumate-box-value sumate-box-textarea" style={{ left: 50, top: 426, width: 620 }} placeholder="Cuéntanos cómo te gustaría sumarte" />
        <div className="sumate-box-divider" style={{ left: 46, top: 560, width: 620 }} />
        <button className="sumate-box-button" type="submit">QUIERO SUMARME <img src={asset('Trazado88.png')} alt="" className="sumate-box-button-icon" /></button>
      </form>
    </section>
  )
}

export default SumateSection
