'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-cheminfo-js:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        userName: 'cheminfo',
        description: 'test'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.gitignore',
      '.travis.yml',
      'src/index.js',
      'test/test.js',
      'History.md',
      'LICENSE',
      'package.json',
      'README.md'
    ]);
  });
});
