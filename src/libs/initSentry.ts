import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { version } from '../../package.json'

export const initSentry = (): void => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    release: `my-project-${version}`,
    tracesSampleRate: 1.0,
  })
}
