import chai, { AssertionError } from 'chai';

import chaiPosixPath from '../index.js';

chai.use(chaiPosixPath);

const should = chai.should();

describe('chaiPosixPath', () => {
  it('should handle win32 path', () => {
    'foo\\bar'.should.be.posixPath('foo/bar');
  });

  it('should handle posix path', () => {
    'foo/bar'.should.be.posixPath('foo/bar');
  });

  it('should handle chaining', () => {
    'foo\\bar'.should.be.posixPath('foo/bar').that.is.a('string');
  });

  it('should handle negating path', () => {
    'foo\\bar'.should.not.be.posixPath('foo');
  });

  it('should throw on mismatch', () => {
    should.Throw(
      () => {
        'foo\\bar'.should.be.posixPath('foo');
      },
      AssertionError,
      // eslint-disable-next-line quotes
      `expected 'foo\\bar' to be 'foo' but got 'foo/bar'`
    );
  });

  it('should throw on negative mismatch', () => {
    should.Throw(
      () => {
        'foo\\bar'.should.not.be.posixPath('foo/bar');
      },
      AssertionError,
      // eslint-disable-next-line quotes
      `expected 'foo\\bar' to not be matching 'foo/bar'`
    );
  });

  it('should throw on invalid entry value', () => {
    should.Throw(
      () => {
        const value = 123;
        value.should.be.posixPath('foo');
      },
      AssertionError,
      'expected 123 to be a string'
    );
  });

  it('should throw on invalid target value', () => {
    should.Throw(
      () => {
        // @ts-ignore
        'foo\\bar'.should.be.posixPath(456);
      },
      AssertionError,
      'expected 456 to be a string'
    );
  });

  it('should throw when both are invalid', () => {
    should.Throw(
      () => {
        const value = 123;
        // @ts-ignore
        value.should.be.posixPath(456);
      },
      AssertionError,
      'expected 123 to be a string'
    );
  });
});
