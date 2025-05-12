'use client'

import { createCtxProvider } from '@/shared/components/createContextProvider'

type InputfieldContextValue = {
  id: string
}

const [InputfieldContextProvider, useInputfieldContext] = createCtxProvider<InputfieldContextValue>(
  'Inputfield',
  {
    id: ''
  }
)

export { InputfieldContextProvider, useInputfieldContext }
