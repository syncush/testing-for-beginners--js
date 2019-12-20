const sinon = require('sinon');
const { expect } = require('chai');
const rewire = require('rewire');

const game = rewire('../../src/game/game.js');
const origGenerateRandomNumber = game.__get__('generateRandomNumber');
const origPlayOneRound = game.__get__('playOneRound');
describe('Game-Testing', function() {
    let sandbox;
    let generateRandomNumberStub;
    let playOneRoundStub;
    before('Initialize', () => {
        sandbox = sinon.sandbox.create();
    });
    beforeEach('reset stubs state between tests', () => {
        generateRandomNumberStub = sandbox.stub();
        playOneRoundStub = sandbox.stub();
        game.__set__('generateRandomNumber', origGenerateRandomNumber);
        game.__set__('playOneRound', origPlayOneRound);
    });
    afterEach(() => {
        sandbox.resetHistory();
    });
    after(() => {
        sandbox.restore();
        game.__set__('generateRandomNumber', origGenerateRandomNumber);
        game.__set__('playOneRound', origPlayOneRound);
    });
    describe('playOneRound', function() {
        it('1 player - Player #0 should win', function() {
            const winner = origPlayOneRound(1);
            expect(winner).to.be.a('number');
            expect(winner).to.be.equal(0);
        });
        it('2 players - Player #0 should win', function() {
            game.__set__('generateRandomNumber', generateRandomNumberStub);
            generateRandomNumberStub.onCall(0).returns(1);
            generateRandomNumberStub.returns(0);
            const winner = origPlayOneRound(2);
            expect(winner).to.be.a('number');
            expect(winner).to.be.equal(0);
        });
        it('2000 players - Player #1337 should win', function() {
            game.__set__('generateRandomNumber', generateRandomNumberStub);
            generateRandomNumberStub.onCall(1337).returns(1);
            generateRandomNumberStub.returns(0);
            const winner = origPlayOneRound(2000);
            expect(winner).to.be.a('number');
            expect(winner).to.be.equal(1337);
        });

    });
    describe('playGame', () => {
        it('-1 players - an exception should be thrown', () => {
            try {
                game(-1, 100);
            } catch(e) {
                expect(e).to.haveOwnProperty('message');
                expect(e.message).to.be.equal('Cant play a round with no players');
                return;
            }
            throw new Error('An exception should have been thrown by game()');
        });
        it('1 players - player #0 should win', () => {
            const winner = game(1, 100);
            expect(winner).to.be.a('number').and.be.equal(0);
        });
        it('10 players - player #5 should win', () => {
            game.__set__('playOneRound', playOneRoundStub);
            playOneRoundStub.onCall(0).returns(5);
            playOneRoundStub.onCall(1).returns(5);
            playOneRoundStub.onCall(2).returns(5);
            playOneRoundStub.returns(8);
            const winner = game(10, 5);
            expect(winner).to.be.a('number').and.be.equal(5);
        });
    });
});
