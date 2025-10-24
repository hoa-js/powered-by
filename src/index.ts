import type { HoaContext, HoaMiddleware } from 'hoa'

/**
 * PoweredBy Middleware for Hoa.
 * @param {string} [name='Hoa'] - The server name to set in the X-Powered-By header.
 * @returns {HoaMiddleware} The middleware handler function
 */
export function poweredBy (name: string = 'Hoa'): HoaMiddleware {
  return async function poweredByMiddleware (ctx: HoaContext, next) {
    await next()
    ctx.res.set('X-Powered-By', name)
  }
}

export default poweredBy
