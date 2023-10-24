<script>

import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();


export let text = "| • ◡ • |"
export let order = 0;




function handleClick() {
    dispatch('message', {
		text,
        order
	});
}

</script>


<button on:click={ handleClick } class="button is-primary">{ text }</button>