import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const cards = [
  {
    n: '01',
    title: 'Vigilancia',
    items: ['Visión nocturna y térmica', 'Zoom óptico 30x', 'Rondas automáticas programadas', 'Cobertura sin puntos ciegos'],
  },
  {
    n: '02',
    title: 'Inteligencia',
    items: ['Detección de personas con IA', 'Geocercas inteligentes', 'Reconocimiento de placas', '90% menos falsas alarmas'],
  },
  {
    n: '03',
    title: 'Respuesta',
    items: ['Despegue automático en alertas', 'Reflector y altavoz disuasivos', 'Video en vivo a la central', 'Aviso en 90 segundos'],
  },
]

const cardEase = [0.22, 1, 0.36, 1] as const

function Card({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: cardEase }}
      className="flex h-full flex-col"
    >
      {children}
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="tecnologia" className="relative min-h-screen w-full overflow-hidden bg-vanta-ink px-6 py-24 md:px-16 lg:px-20">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className="relative z-10">
        <h2 className="max-w-5xl font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-7xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Una flota que ve, piensa y actúa sola.', className: 'text-[#E8EEF7]' },
              { text: 'Hecha para proteger lo que más te importa.', className: 'text-white/40' },
            ]}
            className="!justify-start text-left"
          />
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:h-[480px] lg:grid-cols-4">
          {/* visual card */}
          <Card index={0}>
            <div className="relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-vanta-glow/30 to-vanta-deep p-6">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <img src="/img/drone-cutout.png" alt="Dron de seguridad VANTA listo para una ronda de vigilancia" loading="lazy" decoding="async" className="w-[78%] animate-floaty drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]" />
              </div>
              <p className="relative z-10 font-heading text-xl font-bold text-[#E8EEF7]">
                Tu guardián en el cielo.
              </p>
            </div>
          </Card>

          {/* info cards */}
          {cards.map((c, i) => (
            <Card key={c.n} index={i + 1}>
              <div className="group flex h-full min-h-[320px] flex-col rounded-[1.5rem] bg-vanta-deep p-6 transition-colors duration-500 hover:bg-[#0c1d3c]">
                <div className="flex items-start justify-between">
                  <span className="font-heading text-2xl font-extrabold text-[#E8EEF7]">{c.title}</span>
                  <span className="font-body text-sm font-light text-white/40">{c.n}</span>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-vanta-sky" />
                      <span className="text-sm font-light leading-snug text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contacto" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#E8EEF7] transition-colors hover:text-vanta-sky">
                  Conoce más
                  <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
