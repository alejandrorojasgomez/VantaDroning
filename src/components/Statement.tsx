import AnimatedText from './AnimatedText'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

// Soft multi-point mesh in the blue family, painted straight onto the section.
const mesh =
  'radial-gradient(40% 60% at 18% 22%, rgba(37,99,235,0.28) 0%, rgba(37,99,235,0) 60%),' +
  'radial-gradient(45% 65% at 82% 30%, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0) 60%),' +
  'radial-gradient(55% 70% at 50% 100%, rgba(29,78,216,0.22) 0%, rgba(29,78,216,0) 65%),' +
  'linear-gradient(180deg, #050a16 0%, #070f24 50%, #050a16 100%)'

export default function Statement() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36" style={{ background: mesh }}>
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-7 pl-[0.35em] text-xs font-light uppercase tracking-[0.35em] text-vanta-sky">
          Por qué VANTA
        </p>

        <h2 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Las cámaras solo graban el robo.' },
              { text: 'Nosotros lo evitamos.', className: 'text-white' },
            ]}
          />
        </h2>

        <AnimatedText
          text="Operamos un centro de monitoreo 24/7 en Cali con pilotos certificados ante la Aerocivil y más de 140 comunidades protegidas. En catorce meses de operación, los conjuntos con VANTA reportan cero hurtos en zonas comunes."
          className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed text-[#DEDBC8] md:text-lg"
        />
      </div>
    </section>
  )
}
