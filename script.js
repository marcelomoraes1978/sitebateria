document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());

});

document.querySelector('.composer button').addEventListener('click', () => {
    var song = document.querySelector('#input').value
    if(song !== ''){
        var songArray = song.split('');
        playComposition(songArray);
    }

});

// Outro código JavaScript que você já tenha...

// Adicionando funcionalidade de clique às teclas das letras
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.getAttribute('data-key');
        playSound(keyValue);
    });
});

// Outro código JavaScript que você já tenha...



function playSound(sound) {
    var audioElement = document.querySelector(`#s_${sound}`);
    var keyElement = document.querySelector(`div[data-key="${sound}"]`);


    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active')

        },300);
    }

}

function playComposition(songArray) {
    var wait = 0;

    songArray.forEach(songItem => {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    });
}



