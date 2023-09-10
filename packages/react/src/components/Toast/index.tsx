import { ComponentProps, ReactNode, useEffect, useState } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import { Heading } from '../Heading'
import { Text } from '../Text'

import { Close, ToastContainer, ToastViewport } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  open: boolean
  duration: number
}

export function Toast({
  title,
  description,
  open,
  duration,
  ...props
}: ToastProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  return (
    <ToastContainer
      duration={duration}
      open={isOpen}
      onOpenChange={setIsOpen}
      {...props}
    >
      <RadixToast.Title asChild>
        <Heading size="sm" css={{ marginBottom: '$2' }}>
          {title}
        </Heading>
      </RadixToast.Title>

      <RadixToast.Description asChild>
        <Text size="sm" css={{ color: '$gray200' }}>
          {description}
        </Text>
      </RadixToast.Description>

      <Close asChild>
        <X size={20} weight="bold" color="#A9A9B2" />
      </Close>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'

export interface ToastProviderProps
  extends ComponentProps<typeof RadixToast.Provider> {
  children: ReactNode
}

export const ToastProvider = ({ children, ...props }: ToastProviderProps) => {
  return (
    <RadixToast.Provider {...props}>
      {children}
      <ToastViewport />
    </RadixToast.Provider>
  )
}

ToastProvider.displayName = 'ToastProvider'
