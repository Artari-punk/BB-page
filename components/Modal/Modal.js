/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import noop from 'lodash/noop'

import { useClickOutside } from 'utils/hooks'

export function Modal(
  { children, fade = false, defaultOpened = false, onClose = noop },
  ref
) {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const bodyRef = useRef(null)

  useClickOutside(bodyRef, () => {
    close()
  })

  const close = useCallback(() => {
    setIsOpen(false)
    onClose()
  }, [onClose])

  const modalElement = typeof window !== 'undefined' ? document.body : null

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  )

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close()
    },
    [close]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape, false)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  if (!modalElement) {
    return null
  }

  return createPortal(
    isOpen ? (
      <div className={clsx('Modal', fade && 'Modal__fade')}>
        <div ref={bodyRef} className="Modal__body">
          {children}
        </div>
      </div>
    ) : null,
    modalElement
  )
}

export default forwardRef(Modal)
