
# traits

mixin traits into objects

## Installing

`npm install entity/traits`

`component install entity/traits`

## Example

```js
var traits = require('traits');

var t = traits();

t('foo', function(){
  this.foo = true;
});

t('bar', function(){
  this.bar = true;
});

var foobar = {};

t.call(foobar, 'foo', 'bar');

console.log(foobar); // { foo: true, bar: true }
```

## API

### traits()

Factory a `trait` function.

### t(trait, fn)

Defines a `trait` using `fn`.

### t.call(object, trait[, ...])

Apply one or more traits to `object`.

## License

MIT
