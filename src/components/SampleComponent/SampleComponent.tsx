import React from 'react'
import Style from './_sampleComponent'
export interface SampleProps {
  text?: string
  onClick?: () => void
}

const SampleComponent: React.FC<SampleProps> = (props: SampleProps) => {
  const { text, onClick } = props
  const displayText = text ? text : 'Sample Component'

  return (
    <Style.Base>
      <Style.Text type='button' onClick={onClick}>
        {displayText}
      </Style.Text>
    </Style.Base>
  )
}

export default SampleComponent
