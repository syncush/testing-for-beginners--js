const sinon = require('sinon');
const mockery = require('mockery')
const { expect } = require('chai');

describe('Game-Testing', function () {
    let sandbox;
    let hammusDBMock;
    let dalConnector;
    const user = {
        name: 'avi',
        id: '2090123456',
        gender: 'male',
        hobbies: ['shawarma', 'voting bibi', 'kitties']
    };
    before('Initialize', () => {
        sandbox = sinon.sandbox.create();
        hammusDBMock = {
            init: sandbox.stub(),
            insertRecord: sandbox.stub(),
            getRecords: sandbox.stub()
        };
        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false,
            useCleanCache: true
        });
        mockery.registerMock('hammus-db', hammusDBMock);
        dalConnector = require('../../src/dal-connector/connector');
    });
    beforeEach('reset stubs state between tests', () => {
        hammusDBMock.init = sandbox.stub();
        hammusDBMock.insertRecordStub = sandbox.stub();
        hammusDBMock.getRecordsStub = sandbox.stub();
    });

    describe('init', () => {
        it('assert parameters', () => {
            const connectionString = 'meow@kitty:8080/panda/tesla/is/the.best'
            hammusDBMock.init.returns();
            dalConnector.init(connectionString);
            expect(hammusDBMock.init.args[0][0]).to.be.equal(connectionString);
        });
    });
    describe('insert a user', () => {
        it('assert parameters', () => {
            hammusDBMock.insertRecordStub.resolves();
            dalConnector.saveUser(user);
            const args = hammusDBMock.insertRecord.args[0];
            expect(args[1]).to.be.a('array');
            expect(args[1]).to.be.of.length(4);
            expect(args[1]).to.include(user.name);
            expect(args[1]).to.include(user.id);
            expect(args[1]).to.include(user.gender);
            expect(args[1]).to.include(user.hobbies.join(','));
        });
    });
    describe('getRecords', () => {
        it('assert parameters', async () => {
            hammusDBMock.getRecords.resolves([user]);
            const resolvedUser = await dalConnector.getUser(user.id);
            expect(resolvedUser).to.deep.equal(user);
        });
    });

    afterEach(() => {
        sandbox.resetHistory();
    });
    after(() => {
        mockery.deregisterAll();
        mockery.disable();
        sandbox.restore();
    });
});
