
/*!
 *
 * traits
 *
 * mixin traits into objects
 *
 * MIT
 *
 */

/**
 * Expose `Traits`.
 */

module.exports = Traits;

/**
 * Factory a `trait` function.
 *
 * @return {Function}
 * @api public
 */

function Traits(){
  var traits = {};

  /**
   * Define a `trait` or apply one
   * or more traits to `this`.
   *
   * @param {String} trait
   * @param {Function} fn
   * @api public
   */

  return function(trait, fn){
    if ('function' == typeof fn) {
      traits[trait] = fn;
    } else {
      for (var i = 0; i < arguments.length; i++) {
        traits[arguments[i]].call(this);
      }
    }
  };
}
