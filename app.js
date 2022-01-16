

const fnWrapper =  ()=>{

    console.log(process)

    let count = 0;

    const counter =  () =>{
        setTimeout(() => {
            console.log(count)
            count++
            if(count>10){
                console.log('Bye!')
                return count
            }
            counter()
        }, 1000);
    }

    return counter()
}


module.exports = fnWrapper