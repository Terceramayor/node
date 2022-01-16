const fnWrapper =  ()=>{

    const buildHello =  () =>{
       return 'Hello!'
    }

    const hello=buildHello()

    console.log(hello)

    return hello
}

module.exports = fnWrapper