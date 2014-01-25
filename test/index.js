
/**
 * Test.
 */

var assert = require('assert');
var traits = require('..');

var t = traits();

t('foo', function(){
  this.foo = true;
});

t('bar', function(){
  this.bar = true;
});

var foobar = {};

t.call(foobar, 'foo', 'bar');

assert(true === foobar.foo);
assert(true === foobar.bar);
