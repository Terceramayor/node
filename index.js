const sayHello = ()=>{
    setTimeout(() => {
        console.log('Hello')
        sayBye()
    }, 1000);
}

const sayBye = ()=>{
    setTimeout(() => {
        console.log('Bye')
        sayHello()
    }, 1000);
}

sayHello()