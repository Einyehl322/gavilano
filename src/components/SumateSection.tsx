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
        <label className="sumate-box-label" htmlFor="sumate-nombres">NOMBRES</label>
        <label className="sumate-box-label" htmlFor="sumate-apellidos">APELLIDOS</label>
        <input id="sumate-nombres" name="nombres" className="sumate-box-placeholder" placeholder="Tu nombre" type="text" autoComplete="given-name" />
        <input id="sumate-apellidos" name="apellidos" className="sumate-box-placeholder" placeholder="Tus apellidos" type="text" autoComplete="family-name" />
        <div className="sumate-box-divider" />
        <div className="sumate-box-divider" />
        <label className="sumate-box-label-sm" htmlFor="sumate-correo">CORREO</label>
        <label className="sumate-box-label-sm" htmlFor="sumate-telefono">TELÉFONO</label>
        <input id="sumate-correo" name="correo" className="sumate-box-placeholder-sm" placeholder="tu@correo.com" type="email" autoComplete="email" />
        <input id="sumate-telefono" name="telefono" className="sumate-box-placeholder-sm" placeholder="+51 000 000 000" type="tel" autoComplete="tel" />
        <label className="sumate-box-label-sm" htmlFor="sumate-motivo">MOTIVO DEL MENSAJE</label>
        <select id="sumate-motivo" name="motivo" className="sumate-box-value sumate-box-select" defaultValue="" required>
          <option value="" disabled>
            Seleccione
          </option>
          <option value="quiero-sumarme">Quiero sumarme</option>
          <option value="mas-informacion">Deseo más información</option>
          <option value="tengo-propuesta">Tengo una propuesta</option>
          <option value="otro">Otro</option>
        </select>
        <div className="sumate-box-divider" />
        <div className="sumate-box-divider" />
        <label className="sumate-box-label-sm" htmlFor="sumate-mensaje">MENSAJE OPCIONAL</label>
        <textarea id="sumate-mensaje" name="mensaje" className="sumate-box-value sumate-box-textarea" placeholder="Cuéntanos cómo te gustaría sumarte" />
        <div className="sumate-box-divider" />
        <button className="sumate-box-button" type="submit">QUIERO SUMARME <img src={asset('Trazado88.png')} alt="" className="sumate-box-button-icon" /></button>
      </form>
    </section>
  )
}

export default SumateSection
