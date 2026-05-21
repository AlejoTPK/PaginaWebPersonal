'use client'

import { Suspense, lazy, useRef, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (!wrapperRef.current) return
      
      const canvas = wrapperRef.current.querySelector('canvas')
      if (!canvas) return

      if (e.target === canvas || (e as any)._isForwarded) return

      const clonedEvent = new PointerEvent('pointermove', {
        clientX: e.clientX,
        clientY: e.clientY,
        pointerId: e.pointerId,
        pointerType: e.pointerType,
        isPrimary: e.isPrimary,
        bubbles: true,
      });
      (clonedEvent as any)._isForwarded = true
      
      canvas.dispatchEvent(clonedEvent)
    }

    window.addEventListener('pointermove', handleGlobalPointerMove)
    return () => window.removeEventListener('pointermove', handleGlobalPointerMove)
  }, [])

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <div ref={wrapperRef} className={className}>
        <Spline
          scene={scene}
          className="w-full h-full"
        />
      </div>
    </Suspense>
  )
}
