/* Listening for a keydown event and then playing the sound associated with that key. */
window.addEventListener('keydown', (el) => {
  let codeKey = el.key.toUpperCase().charCodeAt(0);
  let key = document.querySelector(`.key[data-key="${codeKey}"]`);

  let sound = document.querySelector(`audio[data-key="${codeKey}"]`);
  if (!key) return;
  sound.currentTime = 0;
  sound.play();
  key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');

/**
 * If the transition that just ended is not a transform, then do nothing, otherwise remove the playing
 * class
 * @param el - the element that the event is being applied to
 * @returns The function removeTransition is being returned.
 */
function removeTransition(el) {
  if (el.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

/* Adding an event listener to each key that is listening for a transitionend event. */
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
