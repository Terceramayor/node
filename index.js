const add = require('./app')

const startTime = process.hrtime.bigint();

for (let i = 0; i < 100000; i++) {
    console.log(add(i,i))
}

var endTime = process.hrtime.bigint();


console.log(`Call to add took ${Number(endTime-startTime) / 1000000} milliseconds`)