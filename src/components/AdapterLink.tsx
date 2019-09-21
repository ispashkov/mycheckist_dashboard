import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref): JSX.Element => <Link innerRef={ref} {...props} />
)

export default AdapterLink
