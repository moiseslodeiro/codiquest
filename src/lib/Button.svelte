<script>

import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();


export let text = "| • ◡ • |"
export let order = 0;

//import piece from './assets/piece.mp3';

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

<style>

.button {
    border: 0;
    border-radius: .5rem;
    box-sizing: border-box;
    line-height: 1.25rem;
    padding: .75rem 1rem;
    text-align: center;
    text-decoration: none #D1D5DB solid;
    text-decoration-thickness: auto;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 5px 0px;
}


</style>

<button on:click={ handleClick } class="button">{ text }</button>