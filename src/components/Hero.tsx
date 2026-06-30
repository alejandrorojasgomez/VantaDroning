import { lazy, Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import GradientBg from './GradientBg'
import SectionAurora from './SectionAurora'
import WordsPullUp from './WordsPullUp'
import { usePrefersReducedMotion, useIdle } from '../hooks'

// three.js is heavy — lazy-load it as its own chunk, after the page is idle.
const GhostCursor: any = lazy(() => import('./GhostCursor'))

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Flota', href: '#flota' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Contacto', href: '#contacto' },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduced = usePrefersReducedMotion()
  const idle = useIdle()
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  const showCursor = idle && !reduced && !isTouch

  return (
    <section className="h-screen w-full bg-vanta-ink p-3 md:p-5">
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-vanta-ink md:rounded-[2.25rem]">
        <GradientBg variant="hero" />
        <SectionAurora opacity={0.42} color1="#1d4ed8" color2="#38bdf8" bandHeight={0.62} speed={0.4} />
        {showCursor && (
          <Suspense fallback={null}>
            <GhostCursor color="#2563eb" brightness={0.5} bloomStrength={0.05} trailLength={26} zIndex={20} />
          </Suspense>
        )}
        <div className="noise-overlay pointer-events-none absolute inset-0 z-[21] opacity-[0.5] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 z-[22] bg-gradient-to-b from-vanta-ink/30 via-transparent to-vanta-ink/80" />

        {/* Navbar — pill hanging from the top edge */}
        <nav className="absolute left-1/2 top-0 z-50 -translate-x-1/2">
          <div className="hidden items-center gap-8 rounded-b-3xl bg-black/70 px-8 py-3 backdrop-blur-md md:flex lg:gap-12">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-light text-white/75 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>

        {/* mobile top bar */}
        <div className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 md:hidden">
          <span className="font-heading text-lg font-extrabold tracking-tight text-white">VANTA</span>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur"
            aria-label="Abrir menú"
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span className="h-0.5 w-full rounded-full bg-white transition-all duration-500" style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span className="h-0.5 w-3 rounded-full bg-white transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="h-0.5 w-full rounded-full bg-white transition-all duration-500" style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </div>
          </button>
        </div>

        <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-vanta-ink/95 backdrop-blur-xl transition-opacity duration-500 md:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-4 font-heading text-3xl font-bold text-white hover:text-vanta-sky">
              {l.label}
            </a>
          ))}
        </div>

        {/* Bottom-aligned content */}
        <div className="absolute bottom-0 left-0 right-0 z-30 grid grid-cols-1 items-end gap-6 p-6 md:p-10 lg:grid-cols-12">
          <h1 className="lg:col-span-8">
            <span className="sr-only">VANTA, vigilancia aérea autónoma</span>
            <WordsPullUp
              text="VANTA"
              className="font-heading text-[20vw] font-extrabold leading-[0.82] tracking-[-0.06em] text-[#E8EEF7] sm:text-[17vw] lg:text-[14vw]"
            />
          </h1>

          <div className="lg:col-span-4 lg:pb-6">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="max-w-sm text-base font-light leading-relaxed text-white/75"
            >
              Una flota de drones con inteligencia artificial que vigila tu conjunto, lote o bodega
              día y noche. Patrulla sola, detecta al intruso y responde antes de que algo pase.
            </motion.p>

            <motion.a
              href="#contacto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#E8EEF7] py-2 pl-6 pr-2 text-base font-bold text-vanta-ink transition-all duration-300 hover:gap-3"
            >
              Agenda tu demo gratis
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vanta-ink transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="h-5 w-5 text-[#E8EEF7]" />
              </span>
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="mt-3 flex items-center gap-1.5 text-xs font-light text-white/55"
            >
              <ArrowUpRight className="h-3.5 w-3.5 text-vanta-sky" />
              Llevamos un dron a tu propiedad. Sin costo, sin compromiso.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
