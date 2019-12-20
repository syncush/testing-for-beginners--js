const { expect } = require('chai');
// const expect = require('chai').expect;



/**
 * This is a sneak peek into the vast possibilities of assertions that can be done
 * with chai, please read the docs @ https://www.chaijs.com/api/bdd/
 * for more options & tricks.
 */
describe('Mocha + Chai = Love', function() {
    describe('booleans', function() {
        it('tests', function() {
            expect(true).to.be.true;
            expect(false).to.be.false;
            expect(true).to.not.be.false;
            expect(false).to.not.be.true;
        });
    });
    describe('Numbers', function() {
        it('tests', function() {
            expect(3).to.be.equal(3);
            // expect
            expect(3).to.be.gte(2);
            expect(3).to.be.gte(3);
            expect(3).to.be.gte(3).and.be.lte(3);
            expect(3).to.be.gte(3).and.be.lte(4);
        });

    });
    describe('Null + Undefined + NaN', function() {
        it('tests', function() {
            expect(undefined).to.be.undefined;
            expect(null).to.be.null;
            expect(NaN).to.be.NaN;

            expect(undefined).to.be.equal(undefined);
            expect(null).to.be.equal(null);
            // expect(NaN).to.be.equal(NaN);

            expect(3).to.not.be.undefined;
            expect(3).to.not.be.null;
            expect(3).to.not.be.NaN;
        });

    });
    describe('Objects', function() {
        it('tests', function() {
            const mySpecialObject = {
                a: 5,
                b: 'string',
                c: true,
                d: 1.5,
                e: {
                    f: null,
                    g: undefined,
                    h: {
                        i: 1,
                        j: 2,
                        k: [1, 2, 3]
                    }
                }
            };
            expect(mySpecialObject.a).to.be.a('number');
            expect(mySpecialObject.b).to.be.a('string');
            expect(mySpecialObject.c).to.be.a('boolean');
            expect(mySpecialObject.d).to.be.a('number');
            expect(mySpecialObject.e).to.be.a('object');
            expect(mySpecialObject.e.h.k).to.be.a('array');
            expect(mySpecialObject).to.have.own.property('a');
            expect(mySpecialObject).to.have.own.property('e');
            expect(mySpecialObject).to.have.nested.property('e.f');
            expect(mySpecialObject).to.have.nested.property('e.h.i');
            expect(mySpecialObject).to.not.have.nested.property('e.h.f');
            expect(mySpecialObject).to.not.have.any.keys('f', 'g', 'i', 'j');
            expect(mySpecialObject.e).to.not.have.any.keys('a', 'b', 'c', 'd');
        });

    });
    describe('Array', function() {
        it('tests', function() {
            const array = [1, 2, 3, 4, 5, 6, 12, -1, 2.5, 23.124];
            expect([]).to.be.empty;
            expect(array).to.not.be.empty;
            expect(array).to.have.length(array.length);
            expect(array).to.include(1);
            expect(array).to.not.be.empty.and.to.includes([1, 2, 3]);
            expect(array).to.have.ordered.members([1, 2, 3, 4, 5, 6, 12, -1, 2.5, 23.124]).and.not.have.ordered.members([2, 1, 3]);
        });
    });
});
