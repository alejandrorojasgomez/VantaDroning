import AnimatedText from './AnimatedText'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

export default function Statement() {
  return (
    <section className="bg-vanta-ink px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] bg-vanta-deep px-6 py-16 text-center md:rounded-[2.25rem] md:px-12 md:py-24">
        <p className="mb-6 text-xs font-light uppercase tracking-[0.35em] text-vanta-sky">
          Por qué VANTA
        </p>

        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold leading-[1.05] text-[#E8EEF7] sm:text-4xl md:text-5xl lg:text-6xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Las cámaras solo graban el robo.' },
              { text: 'Nosotros', className: 'text-white' },
              { text: 'lo evitamos.', className: 'font-serif italic font-normal text-vanta-sky' },
            ]}
          />
        </h2>

        <AnimatedText
          text="Operamos un centro de monitoreo 24/7 en Cali con pilotos certificados ante la Aerocivil y más de 140 comunidades protegidas. En catorce meses de operación, los conjuntos con VANTA reportan cero hurtos en zonas comunes."
          className="mx-auto mt-10 max-w-2xl text-sm font-light leading-relaxed text-[#DEDBC8] md:text-base"
        />
      </div>
    </section>
  )
}
