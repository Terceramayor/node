const fnWrapper =  ()=>{

    const buildHello =  () =>{
       return 'Hello!'
    }

    const hello=buildHello()

    return hello
}

module.exports = fnWrapper