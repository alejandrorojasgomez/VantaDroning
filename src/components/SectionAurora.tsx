import { lazy, Suspense } from 'react'
import { usePrefersReducedMotion, useInViewOnce } from '../hooks'

// Lazy so ogl ships in its own async chunk, off the critical path.
const SoftAurora: any = lazy(() => import('./SoftAurora'))

interface SectionAuroraProps {
  className?: string
  opacity?: number
  color1?: string
  color2?: string
  speed?: number
  bandHeight?: number
  brightness?: number
}

/**
 * Ambient aurora layer. Mounts the WebGL canvas only when the section nears the
 * viewport, and skips it entirely when the user prefers reduced motion (a static
 * gradient tint stands in so the section never looks empty).
 */
export default function SectionAurora({
  className = '',
  opacity = 0.5,
  color1 = '#1d4ed8',
  color2 = '#38bdf8',
  speed = 0.5,
  bandHeight = 0.5,
  brightness = 1.0,
}: SectionAuroraProps) {
  const reduced = usePrefersReducedMotion()
  const { ref, inView } = useInViewOnce<HTMLDivElement>('300px')

  if (reduced) {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-0 ${className}`}
        style={{
          opacity: opacity * 0.7,
          background: `radial-gradient(90% 70% at 50% ${bandHeight * 100}%, ${color2}33 0%, transparent 60%)`,
        }}
      />
    )
  }

  return (
    <div ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 z-0 ${className}`} style={{ opacity }}>
      {inView && (
        <Suspense fallback={null}>
          <SoftAurora
            speed={speed}
            scale={1.4}
            brightness={brightness}
            color1={color1}
            color2={color2}
            noiseFrequency={2.2}
            bandHeight={bandHeight}
            bandSpread={1.0}
            enableMouseInteraction={false}
          />
        </Suspense>
      )}
    </div>
  )
}
