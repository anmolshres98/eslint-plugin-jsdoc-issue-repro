class Filler {
  static methodOne() {
    return 'Method One';
  }

  nonStaticMethodTwo(param) {
    return `Method Two received: ${param}`;
  }

  /**
   * {@link methodOne} is reports eslint error - jsdoc/no-undefined-types
   * {@link nonStaticMethodTwo} also reports eslint error - jsdoc/no-undefined-types
   * @returns {number} A number representing the answer to everything.
   */
  static methodThree() {
    return 42;
  }
  
  /**
   * {@link Filler.methodOne} doesn't report eslint error - jsdoc/no-undefined-types
   * {@link Filler.nonStaticMethodTwo} also doesn't report eslint error - jsdoc/no-undefined-types
   * @returns {string} A string indicating the method's purpose.
   */
  methodFour() {
    return 'Method Four';
  }
}

export default Filler;