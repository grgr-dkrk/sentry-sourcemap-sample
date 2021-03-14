import React from 'react'
import * as Sentry from '@sentry/react'
import { SignIn } from './containers/signIn'

export const App: React.FC = () => {
  return (
    <Sentry.ErrorBoundary fallback={'An error has occurred'}>
      <SignIn />
    </Sentry.ErrorBoundary>
  )
}
