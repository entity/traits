
/**
 * Example.
 */

var traits = require('./');

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
