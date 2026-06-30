import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface Props {
  segments: Segment[]
  className?: string
}

/** Pull-up animation across multiple styled segments, preserving per-word class. */
export default function WordsPullUpMultiStyle({ segments, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  const words = segments.flatMap((seg) =>
    seg.text.split(' ').map((w) => ({ word: w, className: seg.className })),
  )

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className={`mr-[0.22em] inline-block ${w.className ?? ''}`}
        >
          {w.word}
        </motion.span>
      ))}
    </span>
  )
}
