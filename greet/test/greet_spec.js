var greet = require('../');

var name = 'hillwah';

describe('greet', function() {
    it('should greet a person by name', function() {
        expect(greet(name)).to.eql('hello, ' + name);
    })

    it('should greet a person flirtatiously if drunk', function() {
        expect(greet(name, '--drunk')).to.eql('hello ' + name + ', you look sexy today.');
    })
})
