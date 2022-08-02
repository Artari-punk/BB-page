import { forwardRef } from 'react'
import clsx from 'clsx'

function Button(props, ref) {
  const { children, className, ...rest } = props
  const cn = clsx('Button', className)

  return (
    <button {...rest} className={cn} ref={ref}>
      {children}
    </button>
  )
}

export default forwardRef(Button)
