import { useEffect, useState } from 'react'

export const useCounterAnimation = (target, isVisible, duration = 1500) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const numericTarget = parseFloat(target)

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * numericTarget))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(numericTarget)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return count
}
