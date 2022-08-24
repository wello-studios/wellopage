const $cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function(move) {
    $cursor.style.left = move.pageX + "px";
    $cursor.style.top = move.pageY - scrollY + "px";
});

function mutebtn() {
    const mutebutton = document.getElementById('mute');
    const player = document.getElementById('video');
    if  (player.muted) {
        player.muted = false;
        mutebutton.innerHTML = '<img src="src/full.svg">ON';
    }
    else {
        player.muted = true;
        mutebutton.innerHTML = '<img src="src/mute.svg">OFF';
    }
}
