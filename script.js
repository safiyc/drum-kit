window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-keycode="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-keycode="${e.keyCode}"]`);
    const errMessageDiv = document.querySelector('#errorDiv');
    
    errMessageDiv.innerHTML = "";
    errMessageDiv.classList.remove('errMessage');

    if (!audio) {       
        const errSound = document.querySelector('#error-sound');
        
        function displayError() {
            errMessageDiv.textContent = "Sorry, the key is not assigned a sound";
            errMessageDiv.classList.add('errMessage');
            return errMessageDiv;
        }
        
        errSound.currentTime = .1;
        errSound.play();
        
        setTimeout(displayError, 100);
    }

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));