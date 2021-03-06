'use strict';

const Default = require('./Default');
const Table = require('./Table');
const Tree = require('./Tree');

module.exports = {
  createReporter,
};

/**
 * @param {ReporterOptions} options
 * @return {Default}
 */
function createReporter(options = {}) {
  options = { printer: console.log, ...options };

  switch (options.name) {
    case 'table': return new Table(options);
    case 'tree': return new Tree(options);
    default: return new Default(options);
  }
}
