<script>

import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();


export let text = "| • ◡ • |"
export let order = 0;

//export let disabled = false;

//import piece from '$assets/piece.mp3';

const audio = new Audio();
//audio.src = piece;

function handleClick() {
    //audio.play();
    dispatch('message', {
		text,
        order
	});
}

</script>


<button on:click={ handleClick } class="button is-primary">{ text }</button>