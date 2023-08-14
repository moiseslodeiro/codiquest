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

/* .button {
    background-color: #FFFFFF;
    border: 0;
    border-radius: .5rem;
    box-sizing: border-box;
    color: #111827;
    font-family: 'Courier New', Courier, monospace;  font-size: .875rem;
    font-weight: 600;
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
    margin: 3px;
}

.button:hover {
    background-color: rgb(249,250,251);
}

.button:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.button:focus-visible {
    box-shadow: none;
} */

</style>

<button on:click={ handleClick } class="button">{ text }</button>