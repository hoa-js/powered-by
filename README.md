## @hoajs/poweredBy

PoweredBy middleware for Hoa.

## Installation

```bash
$ npm i @hoajs/poweredBy --save
```

## Quick Start

```js
import { Hoa } from 'hoa'
import { poweredBy } from '@hoajs/poweredBy'

const app = new Hoa()
app.use(poweredBy())

app.use(async (ctx) => {
  ctx.res.body = `Hello, Hoa!`
})

export default app
```

## Documentation

The documentation is available on [hoa-js.com](https://hoa-js.com/middleware/poweredBy.html)

## Test (100% coverage)

```sh
$ npm test
```

## License

MIT
