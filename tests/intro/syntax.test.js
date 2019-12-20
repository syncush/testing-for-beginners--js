describe('WOOOHOO I LOVE MOCHA', function() {
    let funPartCounter = 0;
    before('Here the fun begins', function() {
    });
    beforeEach('Moving to the next fun part', function() {
        console.log('LETS GO FUN PART NUMBER ' + funPartCounter);
    });
    after('Fun parts are done', function() {
        console.log('bye bye, see you next time!');
    });
    describe('Fun Part #0', function() {
        let funCounter = 0;
        before('This is the before hook of the Fun Part!', function() {
            console.log('I am so excited!!!!');
        });
        beforeEach(function() {
            console.log(`THIS IS SO FUN ${funCounter}`);
            funCounter += 1;
        });
        it('Fun test', function() {
            const string = 'Testing is fun, I would never write code without tests again!';
            if(!string.includes('Testing is fun')) {
                throw new Error('Testing is fun! I did not find the fun in your string')
            }
        });
        it('What comes after testing? fun!', function() {
            const array = ['Hiroshima', 'Perl Harbor', 'Sarit Hadad', 'testing', 'fun'];
            const indexOfFun = array.indexOf('testing') + 1;
            if (array[indexOfFun] !== 'fun') {
                throw new Error('WHERE IS ALL THE FUN!? PUT IT BACK IN.');
            }
        });
    });
    describe('Fun part #1', function() {
        after('', function() {
            console.log('WHY AM I RUNNING? Please stop!');
        });
        beforeEach('What is love?', function() {
            let love = 5;
        });
        it('Do I really have to listen to this?', function() {
            if (true) {
                console.log('yes');
            }
        });
        afterEach('Baby don\'t hurt me', function() {
            throw new Error('Baby just have hurt me');
        });
    });
});
