import { motion } from 'framer-motion'

const sectors = [
  {
    n: '01',
    title: 'Conjuntos residenciales',
    body: 'Rondas nocturnas por zonas comunes, parqueaderos y perímetro. Menos vigilantes a pie, más ojos en el aire.',
  },
  {
    n: '02',
    title: 'Lotes y parcelaciones',
    body: 'Cobertura de grandes extensiones sin cercas eléctricas ni torres. Detecta invasión y robo de material al instante.',
  },
  {
    n: '03',
    title: 'Bodegas e industria',
    body: 'Inspección térmica de techos, patios y zonas de carga. Disuasión activa fuera del horario laboral.',
  },
  {
    n: '04',
    title: 'Obra y construcción',
    body: 'Control de avance y seguridad del lote 24/7. Evita el robo de herramienta, cobre y combustible.',
  },
]

const fade = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 24 },
  whileInView: { filter: 'blur(0px)', opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
}

export default function UseCases() {
  return (
    <section id="sectores" className="relative w-full overflow-hidden bg-vanta-ink py-28">
      <div className="relative z-10 grid grid-cols-1 gap-14 px-6 md:px-16 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-20">
        {/* image */}
        <motion.div
          {...fade}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="group liquid-glass relative overflow-hidden rounded-[1.5rem] bg-vanta-deep"
        >
          <img
            src="/img/residential.jpg"
            alt="Vista aérea de un conjunto residencial protegido por VANTA"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover opacity-90 mix-blend-luminosity transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          {/* blue duotone wash */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-vanta-glow/40 via-vanta-accent/10 to-transparent mix-blend-color" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-vanta-ink via-vanta-ink/40 to-transparent p-6">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-sky-400">
              En operación · Cali
            </p>
            <p className="mt-1 font-heading text-2xl font-semibold">
              Reserva Campestre, cero incidentes en 14 meses
            </p>
          </div>
        </motion.div>

        {/* list */}
        <div>
          <p className="mb-5 font-body text-sm uppercase tracking-[0.22em] text-vanta-sky/80">Sectores</p>
          <h2 className="max-w-md font-heading text-5xl font-bold leading-[1.02] tracking-[-0.02em] md:text-6xl">
            Hecho para cada metro de tu propiedad
          </h2>

          <div className="mt-10 flex flex-col">
            {sectors.map((s, i) => (
              <motion.div
                key={s.n}
                {...fade}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="group flex cursor-default gap-5 border-t border-white/10 py-6 transition-all duration-300 hover:pl-3"
              >
                <span className="font-heading text-2xl text-sky-400/70 transition-colors duration-300 group-hover:text-vanta-accent">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-semibold leading-tight tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md font-body text-sm font-light leading-relaxed text-white/75">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
