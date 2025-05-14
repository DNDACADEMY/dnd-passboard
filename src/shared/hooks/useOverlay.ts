import { useState, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'

type OverlayProps = {
  isOpen: boolean
  close: () => void
}

export const useOverlay = (element?: HTMLElement) => {
  const [isOpen, setIsOpen] = useState(false)
  const elementRef = useRef<HTMLElement>(element || document.getElementById('overlay')!)

  const open = useCallback(
    (render: (props: OverlayProps) => React.ReactNode) => {
      setIsOpen(true)

      const overlay = createPortal(
        render({
          isOpen,
          close: () => setIsOpen(false)
        }),
        elementRef.current
      )

      return overlay
    },
    [isOpen]
  )

  return {
    open,
    onClose: () => setIsOpen(false)
  }
}
