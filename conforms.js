define(['./_baseClone', './_baseConforms'], function(baseClone, baseConforms) {

  /**
   * Creates a function that invokes the predicate properties of `source` with
   * the corresponding property values of a given object, returning `true` if
   * all predicates return truthy, else `false`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {Object} source The object of property predicates to conform to.
   * @returns {Function} Returns the new spec function.
   * @example
   *
   * var objects = [
   *   { 'a': 2, 'b': 1 },
   *   { 'a': 1, 'b': 2 }
   * ];
   *
   * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
   * // => [{ 'a': 1, 'b': 2 }]
   */
  function conforms(source) {
    return baseConforms(baseClone(source, true));
  }

  return conforms;
});
