import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://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@o4506589683824640.ingest.sentry.io/4506589688498176',
  tracesSampleRate: 1.0,
  integrations: [],
})
