import GradientBg from './GradientBg'
import TrueFocusRaw from './TrueFocus'

// React Bits component authored in JS — type loosely so props stay optional.
const TrueFocus: any = TrueFocusRaw

export default function PromiseBand() {
  return (
    <section className="relative w-full overflow-hidden bg-vanta-ink py-24">
      <GradientBg variant="panel" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="mb-8 font-body text-sm uppercase tracking-[0.28em] text-vanta-sky/80">
          La promesa
        </p>
        <div className="font-heading text-4xl font-extrabold text-white md:text-6xl">
          <TrueFocus
            sentence="Detecta Disuade Responde"
            blurAmount={6}
            borderColor="#3b82f6"
            glowColor="rgba(59,130,246,0.6)"
            animationDuration={0.6}
            pauseBetweenAnimations={1.2}
          />
        </div>
        <p className="mt-10 max-w-xl font-body text-base font-light leading-relaxed text-white/75">
          Cada dron hace el trabajo de varios vigilantes: ve en la oscuridad, ahuyenta al intruso
          y avisa a la central en segundos. Tú solo recibes la confirmación.
        </p>
      </div>
    </section>
  )
}
