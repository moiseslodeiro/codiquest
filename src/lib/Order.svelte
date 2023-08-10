<script>

    import Button from '$lib/Button.svelte';
    import Input from '$lib/Input.svelte';
    import { onMount } from 'svelte';

    const re = /(\$.*?\$)/g

    export let codeBlock;
    let slicedGaps = [];
    
    let positionToFill = 0;
    let positions = [];
    let buttons = [];

    export let shuffle = true;
    export let gaps = []

    $: if(positionToFill < 0) {
        positionToFill = 0;
    } else if(slicedGaps != null && positionToFill > slicedGaps.length) {
        positionToFill = slicedGaps.length;
    }

    function handleMessage(event) {
        document.getElementById('input-' + positionToFill).innerHTML = event.detail.text;
        positions[positionToFill] = event.detail.order;
        positionToFill++;
    }
    
    function checkSolution() {
        const solutions = [...new Set(positions)];
        console.log(solutions)
        console.log(solutions.length == slicedGaps.length && solutions.every((v,i,a) => !i || a[i-1] <= v))
    }
    
    function stepUndo() {
        if(positionToFill > 0 && positionToFill <= slicedGaps.length) {
            document.getElementById('input-' + --positionToFill).innerHTML = ' ';
            positions.pop();
        }
    }
    
    function clear() {
        while(positions.length > 0) {
            positions.pop();
            document.getElementById('input-' + --positionToFill).innerHTML = ' ';
        }
    } 

    onMount(async () => {
        let _order = 0;
        let _answers = [];
    
        slicedGaps = codeBlock.match(re);

        if(slicedGaps.length === 0) {
            console.error('Whoops')
        }

        codeBlock.split(re).forEach((match) => match.startsWith('$') && match.endsWith('$') ? gaps.push({element: match, type: Input, value: _order++ }) : gaps.push({element: match}))        
        slicedGaps.forEach((value, o) => _answers.push({order: o, text: value.slice(1, -1) }))
        buttons = shuffle == true ? _answers.sort((a, b) => 0.5 - Math.random()) : _answers;
        gaps = [...gaps]

    });
    
</script>
    
    <style>
    
    :global(body) {
        background-color: #F6F7FB;
        font-family: 'Rubik', sans-serif;
        font-weight: normal;
        letter-spacing: 0.05rem;
    }
    
    .code {
        background-color: white;
        font-family: 'Courier New', Courier, monospace;
    }
    
    .code > pre {
        text-align: left;
        padding: 5px 10px 5px 15px;
        font-size: medium;
        border-left: 3px solid sandybrown;
    }
    
    .botonera {
        display: flex;
    
    }
    
    .botonera .options {
        flex-wrap: wrap;
         width: calc(85%);
    }
    
    .botonera .menu {
        display: flex;
        flex-direction: column;
        width: calc(15%);
    }

    .code:hover {
      animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
    
    @keyframes shake {
      10%, 90% {
        transform: translate3d(-1px, 0, 0);
      }
      
      20%, 80% {
        transform: translate3d(2px, 0, 0);
      }
    
      30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
      }
    
      40%, 60% {
        transform: translate3d(4px, 0, 0);
      }
    }
    
    .button {
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
    
    .green {
        background-color: lawngreen;
    }
    
</style>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <span id="codeElement">
       <slot name="code">afaf</slot>
    </span>
    
    <div>
        <slot name="text">
            (>'3')>
        </slot>
    </div>
    <div class="code">
        <pre>
         {#each gaps as i}
            {#if i.type}
                <svelte:component this={ i.type } {...{id: i.value}}/>
            {:else}
                {i.element}
            {/if}        
        {:else}
            Loading...
        {/each}
        </pre>
    </div>

    <slot name="card"></slot>
    
    <div class="botonera">
        <div class="options">
         {#each buttons as button}
            <Button text={ button.text } order={ button.order } on:message={ handleMessage } />
        {/each}  
        </div>
        <div class="menu">
    
    <span class="material-symbols-outlined">
    flip
    </span>
                 <button class="button green" on:click={ checkSolution }><span class="material-symbols-outlined">task_alt</span></button>
                <button class="button" on:click={ stepUndo }><span class="material-symbols-outlined">undo</span></button>
            <button class="button" on:click={ clear }><span class="material-symbols-outlined">restart_alt</span></button>
         </div>
     </div>
    
    