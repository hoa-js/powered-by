import { Hoa } from 'hoa'
import { describe, it, expect, beforeEach } from '@jest/globals'
import { poweredBy } from '../src/index'

describe('poweredBy middleware', () => {
  let app: Hoa

  beforeEach(() => {
    app = new Hoa()
  })

  it('should set default X-Powered-By header', async () => {
    app.use(poweredBy())
    app.use(async (ctx) => {
      ctx.res.body = 'Hello, Hoa!'
    })

    const response = await app.fetch(new Request('http://localhost/'))
    expect(response.headers.get('X-Powered-By')).toBe('Hoa')
  })

  it('should not use default when serverName is empty string', async () => {
    app.use(poweredBy(''))
    app.use(async (ctx) => {
      ctx.res.body = 'Hello, Hoa!'
    })

    const response = await app.fetch(new Request('http://localhost/'))
    expect(response.headers.get('X-Powered-By')).toBe('')
  })

  it('should set custom server name', async () => {
    app.use(poweredBy('MyServer'))
    app.use(async (ctx) => {
      ctx.res.body = 'Hello, Hoa!'
    })

    const response = await app.fetch(new Request('http://localhost/'))
    expect(response.headers.get('X-Powered-By')).toBe('MyServer')
  })

  it('Should not return duplicate values', async () => {
    app.use(poweredBy('MyServer'))
    app.use(poweredBy('MyServer'))
    app.use(async (ctx) => {
      ctx.res.body = 'Hello, Hoa!'
    })

    const response = await app.fetch(new Request('http://localhost/'))
    expect(response.headers.get('X-Powered-By')).toBe('MyServer')
  })
})
