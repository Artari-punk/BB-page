import clsx from 'clsx'

function Button(props) {
  const { children, className, ...rest } = props
  const cn = clsx('Button', className)

  return (
    <button {...rest} className={cn}>
      {children}
    </button>
  )
}

export default Button
