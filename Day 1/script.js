var keyMap = {
	'A': 'sounds/clap.wav',
	'S': 'sounds/hihat.wav',
	'D': 'sounds/kick.wav',
	'F': 'sounds/openhat.wav',
	'G': 'sounds/boom.wav',
	'H': 'sounds/ride.wav',
	'J': 'sounds/snare.wav',
	'K': 'sounds/tom.wav',
	'L': 'sounds/tink.wav'
};

function playSound (audio) {
	if (audio) {
	    audio.currentTime = 0;
	    audio.play();		
	}
}

function clickHandler (e) {
	var audio = document.querySelector(`audio[data-key="${e.srcElement.innerText}"]`);
	playSound(audio);
}

function keyHandler (e) {
	var audio = document.querySelector(`audio[data-key="${e.key.toUpperCase()}"]`);
	var div = document.querySelector(`div[data-key="${e.key.toUpperCase()}"]`);
	div.classList.add('pressed');
	playSound(audio);
	setTimeout(function () { div.classList.remove('pressed'); }, 200);
}

function createKeys () {
	var div;
	var key;
	var span;
	var audio;
	var container = document.getElementsByClassName('keys')[0];

	for (key in keyMap) {
		div = document.createElement('div');
		div.classList.add('key');
		div.setAttribute('data-key', key);
		div.addEventListener('click', clickHandler);

		span = document.createElement('span');		
		span.innerHTML = key;
		span.classList.add('keycode');
		div.appendChild(span);

		audio = document.createElement('audio');
		audio.src = keyMap[key];
		audio.setAttribute('data-key', key);
		div.appendChild(audio);
		
		container.appendChild(div);
	}
}

createKeys();
window.addEventListener('keydown', keyHandler);
