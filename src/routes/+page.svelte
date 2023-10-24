<script>
  import { base } from "$app/paths";
  import { page } from '$app/stores'

  import Card from '$lib/Card.svelte';

</script>



<div class="container is-max-widescreen my-4 px-2">
    
  <h1>CodiQuest</h1>

  <hr>

  <div class="columns">
    
    <div class="column">

      <Card image="js.jpeg" alt="Hola caracola" linksTo="js">
        <span slot="text">asfasff</span>
      </Card>

    </div>
    <div class="column">

      <Card image="git.jpeg" alt="Hola caracola" linksTo="git">
        <span slot="text">asfasff</span>
      </Card>

    </div>

  </div>

</div>