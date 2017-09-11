define((require, exports, module) => {
  'use strict';

  const EXTENSION_NAME = 'brackets-eslint';

  function log(level, msgs) {
    return console[level].apply(console, ['[' + EXTENSION_NAME + ']'].concat(msgs));
  }

  exports.info = (...msgs) => {
    return log('log', msgs);
  };

  exports.error = (...msgs) => {
    return log('error', msgs);
  };

});
