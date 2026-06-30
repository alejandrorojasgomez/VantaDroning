import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import GradientBg from './GradientBg'
import StatCounter from './StatCounter'
import { usePrefersReducedMotion, useInViewOnce } from '../hooks'

// Lazy so ogl loads only when this section is reached.
const Radar: any = lazy(() => import('./Radar'))

export default function RadarSection() {
  const reduced = usePrefersReducedMotion()
  const { ref, inView } = useInViewOnce<HTMLDivElement>('300px')
  const showRadar = inView && !reduced

  return (
    <section id="radar" className="relative w-full overflow-hidden bg-vanta-ink py-28">
      <GradientBg variant="deep" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-16 lg:grid-cols-2 lg:gap-8 lg:px-20">
        {/* copy */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-5 font-body text-sm uppercase tracking-[0.22em] text-vanta-sky/80">
            Detección
          </p>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-[3.4rem]">
            El tiempo de detección más rápido del mundo
          </h2>
          <p className="mt-6 max-w-md font-body text-base font-light leading-relaxed text-white/75">
            El radar de IA barre todo el perímetro varias veces por segundo. En el instante en que algo
            cruza una geocerca, el dron ya va en camino, sin operador humano de por medio.
          </p>

          <div className="mt-10 flex flex-wrap gap-10">
            <div>
              <StatCounter to={400} places={[100, 10, 1]} suffix="ms" fontSize={44} className="text-vanta-sky" />
              <p className="mt-1 font-body text-xs uppercase tracking-wide text-white/60">Latencia de detección</p>
            </div>
            <div>
              <StatCounter to={99} places={[10, 1]} suffix="%" fontSize={44} />
              <p className="mt-1 font-body text-xs uppercase tracking-wide text-white/60">Precisión de alertas</p>
            </div>
          </div>
        </motion.div>

        {/* radar + drone */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-vanta-accent/25 blur-[90px]" />
          {/* radar canvas (or static ring fallback) */}
          <div className="absolute inset-0">
            {showRadar ? (
              <Suspense fallback={<RadarFallback />}>
                <Radar
                  speed={1.4}
                  scale={0.6}
                  ringCount={9}
                  spokeCount={12}
                  ringThickness={0.045}
                  spokeThickness={0.009}
                  sweepSpeed={1.8}
                  sweepWidth={1.8}
                  color="#3b82f6"
                  backgroundColor="#000000"
                  falloff={2.1}
                  brightness={1.5}
                  mouseInfluence={0.14}
                />
              </Suspense>
            ) : (
              <RadarFallback />
            )}
          </div>
          {/* floating drone — outer div holds the centering, inner img the motion
              (so the float keyframe can't override the -50% translate) */}
          <div className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2">
            <img
              src="/img/drone-cutout.png"
              alt="Dron de seguridad VANTA con cámara, sobrevolando en una ronda de vigilancia"
              loading="lazy"
              decoding="async"
              className={`w-full drop-shadow-[0_30px_55px_rgba(0,0,0,0.75)] ${reduced ? '' : 'animate-floaty'}`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/** Static concentric-ring placeholder shown before the WebGL radar loads. */
function RadarFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[0.35, 0.6, 0.85].map((s) => (
        <span
          key={s}
          className="absolute rounded-full border border-vanta-accent/25"
          style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
        />
      ))}
    </div>
  )
}
