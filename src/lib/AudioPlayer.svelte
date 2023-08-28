<script context="module">
    const players = new Set()
  
    export let xx = false;

    export function stopAll() {
      players.forEach(p => p.pause())
      players.forEach(p => xx = p.paused)
    }

    export function playAll() {
      players.forEach(p => p.play())
      players.forEach(p => xx = p.paused) 
    }

  </script>
  
  <script>
    import { onMount } from 'svelte'
    export let src  
    let player
  
    onMount(() => {
      // Like players.push(player)
      players.add(player)
    })
  </script>
  
  <div>
      <audio
          bind:this={player}
          {src}
          controls>
          <track kind="captions" />
      </audio>
  </div>