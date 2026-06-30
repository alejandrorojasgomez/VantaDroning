import { motion } from 'framer-motion'
import GradientBg from './GradientBg'
import SectionAurora from './SectionAurora'
import ShinyTextRaw from './ShinyText'
import ContactForm from './ContactForm'

const ShinyText: any = ShinyTextRaw

const navLinks = [
  { label: 'Flota', href: '#flota' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Contacto', href: '#contacto' },
]

export default function CTA() {
  return (
    <footer id="contacto" className="relative w-full overflow-hidden bg-vanta-ink">
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-24">
        <GradientBg variant="hero" />
        <SectionAurora opacity={0.45} color1="#1d4ed8" color2="#38bdf8" bandHeight={0.55} speed={0.45} />

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 24 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 px-6 text-center"
        >
          <p className="pl-[0.22em] font-body text-sm uppercase tracking-[0.22em] text-vanta-sky/80">Empieza hoy</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-heading text-5xl font-extrabold leading-[1.04] tracking-[-0.02em] md:text-7xl">
            <ShinyText text="Deja de vigilar a ciegas" speed={4} color="#9db4d6" shineColor="#ffffff" spread={80} />
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base font-light leading-relaxed text-white/80">
            Déjanos tus datos y un asesor coordina una visita a tu propiedad. Sin compromiso,
            sin inversión inicial.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>

          <p className="mt-6 text-sm font-light text-white/60">
            ¿Prefieres hablar?{' '}
            <a href="tel:+576020000000" className="font-medium text-vanta-sky transition-colors hover:text-white">
              +57 602 000 0000
            </a>{' '}
            ·{' '}
            <a href="mailto:hola@vantadrones.co" className="font-medium text-vanta-sky transition-colors hover:text-white">
              hola@vantadrones.co
            </a>
          </p>
        </motion.div>
      </section>

      {/* footer bar */}
      <div className="relative z-10 border-t border-white/10 px-6 py-12 md:px-16 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-3xl font-extrabold leading-none text-vanta-accent">V</span>
              <span className="font-body text-base font-medium tracking-[0.25em] text-white/90">
                VANTA DRONES
              </span>
            </div>
            <p className="mt-3 max-w-xs font-body text-sm font-light text-white/60">
              Vigilancia aérea autónoma. Cali, Colombia.
              <br />
              Habilitados ante la Aerocivil · RPAS clase A.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-sm font-light text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 font-body text-xs font-light text-white/40 md:flex-row md:justify-between">
          <span>© 2026 VANTA Drones S.A.S. Sitio ficticio de demostración.</span>
          <span>Imágenes con licencia Adobe Stock · Datos ilustrativos.</span>
        </div>
      </div>
    </footer>
  )
}
