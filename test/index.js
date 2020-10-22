/**
   * test function
   * @param {string} desc
   * @param {function} fn
*/
function test(desc, fn) {
    try {
        fn();
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
    } catch (error) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
        console.error(error);
    }
}

/**
   * assert function
   * @param {boolean} isTrue
*/
function assert(isTrue) {
    if (!isTrue) {
      throw new Error();
    }
}

global.app.assert = assert;
global.app.test = test;
