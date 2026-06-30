import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { ArrowUpRight, ShieldIcon, RadarIcon, BatteryIcon, SignalIcon } from './icons'

const fleet = [
  {
    name: 'Sentinel S1',
    tagline: 'Para conjuntos residenciales',
    img: '/img/drone-white1.jpg',
    price: '$2.190.000',
    period: 'al mes, todo incluido',
    specs: [
      { icon: BatteryIcon, label: 'Autonomía', value: '38 min' },
      { icon: SignalIcon, label: 'Enlace', value: '8 km' },
      { icon: RadarIcon, label: 'Cobertura', value: '12 ha' },
    ],
    featured: false,
  },
  {
    name: 'Raptor X3',
    tagline: 'Para lotes, obra y bodegas',
    img: '/img/drone-thermal.jpg',
    price: '$3.450.000',
    period: 'al mes, todo incluido',
    specs: [
      { icon: BatteryIcon, label: 'Autonomía', value: '55 min' },
      { icon: SignalIcon, label: 'Enlace', value: '15 km' },
      { icon: RadarIcon, label: 'Cobertura', value: '40 ha' },
    ],
    featured: true,
  },
  {
    name: 'Nimbus Dock',
    tagline: 'Estación 100% autónoma',
    img: '/img/drone-product.jpg',
    price: '$5.900.000',
    period: 'al mes, sin operador',
    specs: [
      { icon: BatteryIcon, label: 'Recarga', value: 'Auto' },
      { icon: SignalIcon, label: 'Enlace', value: '5G + RF' },
      { icon: RadarIcon, label: 'Cobertura', value: '24/7' },
    ],
    featured: false,
  },
]

const included = [
  'Dron de seguridad con IA',
  'Software y app de monitoreo',
  'Mantenimiento y repuestos',
  'Central humana 24/7',
  'Instalación y capacitación',
  'Garantía total',
]

export default function Fleet() {
  return (
    <section id="flota" className="relative w-full overflow-hidden bg-vanta-ink py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-vanta-accent/10 blur-[120px]" />

      <div className="relative z-10 px-6 md:px-16 lg:px-20">
        <p className="mb-4 text-xs font-light uppercase tracking-[0.32em] text-vanta-sky">Planes todo incluido</p>
        <h2 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] text-[#E8EEF7] md:text-6xl">
          Vigilancia de élite por menos que un vigilante
        </h2>
        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/75">
          Una cuota mensual fija reemplaza turnos, cámaras y rondas. Sin inversión inicial,
          sin contratar personal, sin sorpresas en la factura.
        </p>

        {/* value stack — everything included in every plan */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {included.map((item) => (
            <span key={item} className="flex items-center gap-1.5 rounded-full bg-vanta-deep px-3.5 py-1.5 text-xs font-light text-white/80">
              <Check className="h-3.5 w-3.5 text-vanta-sky" /> {item}
            </span>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {fleet.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
              className={`group flex flex-col overflow-hidden rounded-[1.5rem] bg-vanta-deep transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_-20px_rgba(56,189,248,0.32)] ${
                d.featured ? 'ring-1 ring-vanta-accent/60 lg:-mt-6 lg:mb-6' : ''
              }`}
            >
              {d.featured && (
                <div className="bg-vanta-accent px-4 py-1.5 text-center text-xs font-bold tracking-wide text-white">
                  EL FAVORITO DE LAS ADMINISTRACIONES
                </div>
              )}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-vanta-deep">
                <img src={d.img} alt={`Dron de seguridad VANTA ${d.name}`} loading="lazy" decoding="async" className="h-full w-full object-cover opacity-90 mix-blend-luminosity transition-transform duration-700 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-vanta-glow/45 via-vanta-accent/15 to-transparent mix-blend-color" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vanta-deep via-vanta-deep/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-vanta-sky/80">VANTA</p>
                <h3 className="mt-1 font-heading text-3xl font-extrabold leading-none text-[#E8EEF7]">{d.name}</h3>
                <p className="mt-2 text-sm font-light text-white/75">{d.tagline}</p>

                <div className="my-6 grid grid-cols-3 gap-2">
                  {d.specs.map((s) => {
                    const Icon = s.icon
                    return (
                      <div key={s.label} className="rounded-xl bg-white/[0.03] px-2 py-3 text-center">
                        <Icon className="mx-auto h-4 w-4 text-vanta-sky/90" />
                        <p className="mt-1.5 text-sm font-medium text-white">{s.value}</p>
                        <p className="text-[10px] uppercase tracking-wide text-white/65">{s.label}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="font-heading text-3xl font-extrabold text-[#E8EEF7]">{d.price}</p>
                    <p className="text-xs font-light text-white/70">{d.period}</p>
                  </div>
                  <a
                    href="#contacto"
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-[1.04] ${
                      d.featured ? 'bg-vanta-accent text-white hover:bg-vanta-glow' : 'bg-white/10 text-white hover:bg-white/15'
                    }`}
                  >
                    Empezar <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* guarantee + scarcity */}
        <div className="mt-10 flex items-center gap-3 rounded-2xl bg-vanta-deep p-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vanta-accent/15">
            <ShieldIcon className="h-5 w-5 text-vanta-sky" />
          </span>
          <p className="text-sm font-light leading-snug text-white/80">
            <span className="font-bold text-[#E8EEF7]">Garantía 30 noches.</span> Si no te sientes más seguro,
            te devolvemos el 100% y retiramos la flota.
          </p>
        </div>
      </div>
    </section>
  )
}
