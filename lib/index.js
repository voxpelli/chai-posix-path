/** @type {Parameters<import('chai')["use"]>[0]} */
const chaiPosixPath = (chai, _utils) => {
  const Assertion = chai.Assertion;

  Assertion.addMethod('posixPath', function (targetPath) {
    const obj = this._obj;

    new Assertion(this._obj).to.be.a('string');
    new Assertion(targetPath).to.be.a('string');

    const posixPath = obj.split('\\').join('/');

    this.assert(
      posixPath === targetPath,
      'expected #{this} to be #{exp} but got #{act}',
      'expected #{this} to not be matching #{act}',
      targetPath,  // expected
      posixPath    // actual
    );
  });
};

export default chaiPosixPath;
