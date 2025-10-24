## @hoajs/powered-by

PoweredBy middleware for Hoa.

## Installation

```bash
$ npm i @hoajs/powered-by --save
```

## Quick Start

```js
import { Hoa } from 'hoa'
import { poweredBy } from '@hoajs/powered-by'

const app = new Hoa()
app.use(poweredBy())

app.use(async (ctx) => {
  ctx.res.body = `Hello, Hoa!`
})

export default app
```

## Documentation

The documentation is available on [hoa-js.com](https://hoa-js.com/middleware/powered-by.html)

## Test (100% coverage)

```sh
$ npm test
```

## License

MIT
