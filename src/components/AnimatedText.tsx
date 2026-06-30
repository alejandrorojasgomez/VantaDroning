import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

function Letter({
  char,
  range,
  progress,
}: {
  char: string
  range: [number, number]
  progress: MotionValue<number>
}) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return <motion.span style={{ opacity }}>{char}</motion.span>
}

/** Progressive character reveal driven by scroll position. */
export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  })

  const chars = text.split('')
  const total = chars.length

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => {
        const start = i / total
        const end = Math.min(start + 0.12, 1)
        return <Letter key={i} char={char} range={[start, end]} progress={scrollYProgress} />
      })}
    </p>
  )
}
