const add = require('./app')

describe('Given the add function',()=>{
    describe('When invoked for 1 and 2',()=>{
        it('It should return 3', ()=>{
            expect(add(1,2)).toBe(3)
        })
    })
    describe('When invoked for -1 and 2',()=>{
        it('It should return 1', ()=>{
            expect(add(-1,2)).toBe(1)
        })
    })
    describe('When invoked for 10 and -2',()=>{
        it('It should return 3', ()=>{
            expect(add(10,-2)).toBe(8)
        })
    })
    describe('When invoked for 0 and 0',()=>{
        it('It should return 0', ()=>{
            expect(add(0,0)).toBe(0)
        })
    })
})