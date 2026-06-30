interface GradientBgProps {
  variant?: 'hero' | 'deep' | 'panel'
  className?: string
}

/**
 * Uniform blue gradient backdrop — replaces photographic backgrounds with a
 * cohesive, controlled palette. Three variants keep sections distinct while
 * staying in the same blue family.
 */
export default function GradientBg({ variant = 'deep', className = '' }: GradientBgProps) {
  const layers: Record<NonNullable<GradientBgProps['variant']>, string> = {
    // hero: deep navy with an off-center glow rising from below
    hero:
      'radial-gradient(120% 90% at 50% 115%, rgba(37,99,235,0.30) 0%, rgba(37,99,235,0) 55%),' +
      'radial-gradient(90% 70% at 80% 0%, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0) 50%),' +
      'linear-gradient(180deg, #050a16 0%, #07112a 55%, #050a16 100%)',
    // deep: calm vertical navy with a soft top glow
    deep:
      'radial-gradient(100% 80% at 50% -10%, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0) 60%),' +
      'linear-gradient(180deg, #050a16 0%, #060e22 50%, #050a16 100%)',
    // panel: subtle side-lit panel
    panel:
      'radial-gradient(80% 120% at 100% 50%, rgba(56,189,248,0.10) 0%, rgba(56,189,248,0) 55%),' +
      'linear-gradient(180deg, #060d20 0%, #050a16 100%)',
  }

  return (
    <div
      aria-hidden
      className={`absolute inset-0 z-0 ${className}`}
      style={{ background: layers[variant] }}
    />
  )
}
