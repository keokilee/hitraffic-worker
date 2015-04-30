let expect = require('chai').expect;

let utils = require('../utils');

describe('utils', function() {
  describe('processAddress', function() {
    it('is defined', function() {
      expect(utils.processAddress).not.to.be.undefined;
    });

    it('transforms "KAM HWY"', function() {
      let result = utils.processAddress('KAM HWY');
      expect(result).to.equal('KAMEHAMEHA HWY');
    });
  });

  describe('prefetchAddress', function() {
    it('is defined', function() {
      expect(utils.prefetchAddress).not.to.be.undefined;
    });
  });
});
