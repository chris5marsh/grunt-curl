// Load in dependencies
var cp = require('child_process'),
    exec = cp.exec,
    chai = require('chai'),
    expect = chai.expect;

module.exports = {
  // Utilities
  'execute task': function (done) {
    // Relocate to test directory
    process.chdir(__dirname);

    // Execute the cmd and task combination
    var that = this;
    exec(this.cmd + this.task, function (err, stdout, stderr) {
      // Save results for later
      that.err = err;
      that.stdout = stdout;
      that.stderr = stderr;

      // Callback
      done();
    });
  },

  // Cleaning tasks
  'A clean test directory': [function () {
    this.cmd = 'grunt clean';
    this.task = '';
  }, 'execute task'],
  'is clean': function () {},

  // Grunt commands
  'grunt curl': function () {
    this.cmd = 'grunt curl:';
  },
  'grunt curl-dir': function () {
    this.cmd = 'grunt curl-dir:';
  },

  // curl tasks
  'downloading a js (utf16) file': [function () {
    this.task = 'js';
    this.filenames = [''];
  }, 'execute task'],
  'downloading a zip (binary) file': [function () {
    this.task = 'zip';
    this.filenames = [''];
  }, 'execute task'],
  'downloading a file from an invalid domain': [function () {
    this.task = 'nonExistingDomain';
    this.filenames = [''];
  }, 'execute task'],
  'downloading a nonexistant file': [function () {
    this.task = 'nonExistingFile';
    this.filenames = [''];
  }, 'execute task'],

  // curl-dir tasks
  'downloading multiple files': [function () {
    this.task = 'multi';
    this.filenames = [''];
  }, 'execute task'],
  'downloading brace expanded files':  [function () {
    this.task = 'braceExpansion';
    this.filenames = [''];
  }, 'execute task'],
  'using a custom router': [function () {
    this.task = 'router';
    this.filenames = [''];
  }, 'execute task'],

  // curl and curl-dir results
  'is successful':  function () {
    // Assert no warnings, good stdout, and file(s) match as expected
    console.log('www', this.err, this.stdout, this.stderr);
  },
  'throws an error':  function () {
    console.log('zzz', this.err);

  },
  'does not create the file':  function () {

  }
};