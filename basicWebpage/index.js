import buttonControl from './src/buttonsModifiers.js'
import BUTTON_POSITION from './src/buttons.js'

window.addEventListener('DOMContentLoaded',()=>{
    
    document.getElementById(BUTTON_POSITION.LEFT).addEventListener('click',()=>buttonControl.enableRightButton())
    document.getElementById(BUTTON_POSITION.RIGHT).addEventListener('click',()=>buttonControl.enableLeftButton())
    buttonControl.enableRightButton()
    
})
