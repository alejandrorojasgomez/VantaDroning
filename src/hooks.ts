import { useEffect, useRef, useState } from 'react'

/** True when the user asked the OS to reduce motion. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

/** True the first time the element scrolls within `rootMargin` of the viewport. */
export function useInViewOnce<T extends HTMLElement>(rootMargin = '200px') {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { rootMargin },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [inView, rootMargin])
  return { ref, inView }
}

/** True once the browser is idle (or after a short fallback), for deferring heavy work. */
export function useIdle(delay = 1) {
  const [idle, setIdle] = useState(false)
  useEffect(() => {
    let cancelled = false
    const done = () => !cancelled && setIdle(true)
    const w = window as unknown as { requestIdleCallback?: (cb: () => void) => number }
    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(done)
      return () => {
        cancelled = true
        ;(window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id)
      }
    }
    const t = setTimeout(done, delay * 1000)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [delay])
  return idle
}
