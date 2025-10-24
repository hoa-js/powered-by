import type { HoaContext, HoaMiddleware } from 'hoa'

interface PoweredByOptions {
  serverName?: string
}

/**
 * PoweredBy Middleware for Hoa.
 * @param {object} [options]
 * @param {string} [options.serverName] - The server name to set in the X-Powered-By header. Default is 'Hoa'.
 * @returns {HoaMiddleware} The middleware handler function
 */
export function poweredBy (options: PoweredByOptions = {}): HoaMiddleware {
  return async function poweredByMiddleware (ctx: HoaContext, next) {
    await next()
    ctx.res.set('X-Powered-By', options.serverName || 'Hoa')
  }
}

export default poweredBy
