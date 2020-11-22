import React, { useCallback, useEffect, useRef, useState } from 'react'

export interface ParallexComponentProps {
  children?: any
  reverse?: boolean
  axis?: 'horizontal' | 'vertical'
  ratio?: number
}

const ParallexComponent = (props: ParallexComponentProps) => {
  const { axis, reverse, ratio } = props
  const [random] = useState<number>(
    ratio
      ? reverse
        ? -ratio
        : ratio
      : reverse
      ? -Math.abs(Math.random() - 0.5)
      : Math.abs(Math.random() - 0.5)
  )
  const parallexRef = useRef<any>(null)

  const handleScroll = useCallback(() => {
    if (axis === 'horizontal')
      parallexRef.current.style.transform = `translateX(${
        window.scrollY * random + 'px'
      })`
    else
      parallexRef.current.style.transform = `translateY(${
        window.scrollY * random + 'px'
      })`
  }, [random, axis])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return React.cloneElement(props.children, {
    ref: parallexRef,
    style: {
      ...props.children.props.style,
      position: 'relative',
      // transition: '0.1s linear',
    },
  })
}

export default ParallexComponent
