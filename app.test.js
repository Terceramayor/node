const fnWrapper = require('./app')

describe('Given the fnWrapper function',()=>{
    describe('When invoked',()=>{
        it('It sohuld return the string Hello!', ()=>{
            expect(fnWrapper()).toBe('Hello!')
        })
    })
})