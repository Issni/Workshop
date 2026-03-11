// Wait for the DOM to be fully loaded before executing JavaScript
// domcontentloaded is the website loaded, function is what you want to do in this whats the function
document.addEventListener('DOMContentLoaded', function() {

    var button = document.getElementById('click-button');
    var img = document.getElementById('cat-image');
    
    var buttonPressed = 0; // 0 means off 1 means on can only have 2 states

    button.addEventListener('click', function(){
        
        if(buttonPressed === 0){
            button.classList.add('bounce-animation');
            buttonPressed = 1
            img.classList.add('opacity-0');
        } else {
            button.classList.remove('bounce-animation');
            buttonPressed = 0
            img.classList.remove('opacity-0');
        }

    })
    
//comment//

})