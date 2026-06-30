import type { CSSProperties } from 'react'

// Each "logo" is a wordmark faked through a distinct type treatment, so the row
// reads like real, varied client brands rather than one repeated font.
interface Logo {
  name: string
  style: CSSProperties
}

const logos: Logo[] = [
  { name: 'AEGIS', style: { fontFamily: 'Sora, sans-serif', fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase' } },
  { name: 'Vanguardia', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 600 } },
  { name: 'núcleo', style: { fontFamily: 'Roboto, sans-serif', fontWeight: 300, letterSpacing: '0.02em' } },
  { name: 'FORTALEZA', style: { fontFamily: '"Arial Narrow", sans-serif', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' } },
  { name: 'Altamira', style: { fontFamily: 'Georgia, serif', fontWeight: 700 } },
  { name: 'ORBE', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.32em' } },
  { name: 'Atalaya', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 500, letterSpacing: '0.04em' } },
  { name: 'domus', style: { fontFamily: 'Sora, sans-serif', fontWeight: 500, letterSpacing: '0.34em', textTransform: 'lowercase' } },
  { name: 'CONSTRUREDES', style: { fontFamily: 'Roboto, sans-serif', fontWeight: 900, letterSpacing: '0.06em' } },
  { name: 'Mirador', style: { fontFamily: 'Georgia, serif', fontWeight: 400, letterSpacing: '0.12em' } },
]

export default function ClientsBar() {
  return (
    <section className="relative w-full border-y border-white/10 bg-black/60 py-10">
      <p className="mb-7 text-center font-body text-[11px] font-medium uppercase tracking-[0.32em] text-white/45">
        Más de 140 comunidades ya duermen tranquilas con VANTA
      </p>

      <div className="group relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-black to-transparent" />

        <div className="marquee-track flex w-max animate-marquee items-center gap-x-16 pr-16 [animation-direction:reverse]">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              style={logo.style}
              className="select-none whitespace-nowrap text-2xl text-white/55 transition-colors duration-300 hover:text-white md:text-[1.7rem]"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
