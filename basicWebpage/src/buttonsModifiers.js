import BUTTON_POSITION from './buttons.js'

export default class buttonControl {

    static enableLeftButton=()=>{
           const buttonToActivate = document.getElementById(BUTTON_POSITION.LEFT)
           buttonToActivate.classList.remove('disabled')
           buttonToActivate.innerHTML = 'Click Me!'
        
           const buttonToDeActivate = document.getElementById(BUTTON_POSITION.RIGHT)
           buttonToDeActivate.innerHTML = 'Do not Click Me!'
           buttonToDeActivate.classList.add('disabled')
    }

    static enableRightButton=()=>{
        const buttonToActivate = document.getElementById(BUTTON_POSITION.RIGHT)
        buttonToActivate.classList.remove('disabled')
        buttonToActivate.innerHTML = 'Click Me!'
     
        const buttonToDeActivate = document.getElementById(BUTTON_POSITION.LEFT)
        buttonToDeActivate.innerHTML = 'Do not Click Me!'
        buttonToDeActivate.classList.add('disabled')
 }

}