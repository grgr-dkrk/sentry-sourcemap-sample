import React from 'react'
import { useSigning } from '../hooks/useSigning'

export const SignIn: React.FC = () => {
  const { isLoading, isSigned } = useSigning()

  return (
    <div>
      {isLoading}
      {isSigned}
    </div>
  )
}
