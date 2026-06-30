import { useEffect, useRef, useState } from 'react'
import CounterRaw from './Counter'

// React Bits component authored in JS — type loosely so props stay optional.
const Counter: any = CounterRaw

interface StatCounterProps {
  to: number
  places: number[]
  prefix?: string
  suffix?: string
  fontSize?: number
  fontWeight?: number
  className?: string
}

/**
 * Wraps the React Bits <Counter/> so it rolls up from 0 to `to` the first
 * time it scrolls into view. Optional prefix/suffix render as plain text.
 */
export default function StatCounter({
  to,
  places,
  prefix,
  suffix,
  fontSize = 48,
  fontWeight = 700,
  className = '',
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValue(to)
          obs.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to])

  return (
    <div ref={ref} className={`flex items-end font-heading leading-none ${className}`}>
      {prefix && <span style={{ fontSize, fontWeight }}>{prefix}</span>}
      <Counter
        value={value}
        places={places}
        fontSize={fontSize}
        fontWeight={fontWeight}
        gap={2}
        padding={4}
        textColor="#ffffff"
        gradientHeight={0}
      />
      {suffix && (
        <span style={{ fontSize: fontSize * 0.95, fontWeight }} className="ml-1">
          {suffix}
        </span>
      )}
    </div>
  )
}
