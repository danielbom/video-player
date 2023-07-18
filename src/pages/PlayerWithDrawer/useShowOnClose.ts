import { useEffect, useRef } from 'react'

export type UseShowOnCloseProps = {
  ref: React.RefObject<HTMLElement>
  disabled?: boolean
}

export function useShowOnClose({ ref, disabled = false }: UseShowOnCloseProps) {
  const min = 0
  const max = 1
  const opacityRef = useRef<'enabled' | 'to-disabled' | 'disabled'>('enabled')

  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      if (!ref.current) return
      switch (opacityRef.current) {
        case 'enabled': {
          const position = ref.current.getBoundingClientRect()
          const center = {
            x: position.left + position.width / 2,
            y: position.top + position.height / 2,
          }
          const radius = 100
          const centerDistance = Math.sqrt(Math.pow(center.x - e.clientX, 2) + Math.pow(center.y - e.clientY, 2))
          const realDistance = centerDistance - radius
          const distance = realDistance < 0 ? 0 : realDistance
          // const opacity = Math.max(1 - distance / 200, 0).toFixed(3)
          const opacity = Math.max(distance > 200 ? 0 : 1, min)
          ref.current.style.setProperty('opacity', opacity.toString())
          break
        }
        case 'to-disabled': {
          opacityRef.current = 'disabled'
          ref.current.style.setProperty('opacity', max.toString())
          break
        }
        case 'disabled':
          return
      }
    }
    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [ref])

  useEffect(() => {
    if (disabled) {
      if (opacityRef.current === 'enabled') {
        opacityRef.current = 'to-disabled'
      }
    } else {
      opacityRef.current = 'enabled'
    }
  }, [disabled])
}
