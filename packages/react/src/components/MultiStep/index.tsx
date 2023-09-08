import { ComponentProps, ElementType } from 'react'

import { Label, MultistepContainer, Step, Steps } from './styles'

export interface MultiStepProps
  extends ComponentProps<typeof MultistepContainer> {
  size: number
  currentStep?: number
  as?: ElementType
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultistepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultistepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
