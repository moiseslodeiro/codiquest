<script>
  import { base } from "$app/paths";
  import { page } from '$app/stores'

  import Card from '$lib/Card.svelte';

</script>



<div class="container is-max-widescreen my-4 px-2 has-background-white">
    
  <h1>CodiQuest</h1>

  <hr>

  <div class="columns">
    
    <div class="column">

      <Card image="js.jpeg" alt="Hola caracola" tech="Javascript Vanilla" linksTo="js">
        <span slot="text">¿Quieres empezar o mejorar tus habilidades básicas en <b>Javascript</b>, de manera interactiva y desde cero? Dale una oportunidad a este módulo. Haz clic en <b>Información</b> para ver el listado de niveles o bien, empeza a jugar desde el nivel 0</span>
        <span slot="tags">

          <div class="tags">
            <span class="tag is-primary">JS</span>
            <span class="tag is-warning">WIP</span>
            <span class="tag is-info">Básico</span>
            <span class="tag is-link">Medio</span>
          </div>

        </span>
      </Card>

    </div>
    <div class="column">

      <Card image="git.jpeg" alt="Let's git!" tech="Git" linksTo="git">
        <span slot="text">¿Sabes por qué la gente no sabe <b>git</b>? ¡Porque git se enseña mal! Si has entendido este meme y quieres perderle el miedo o repasar este sistema de control de versiones, este es tu módulo</span>
        <span slot="tags">

          <div class="tags">
            <span class="tag is-primary">Git</span>
            <span class="tag is-warning">WIP</span>
            <span class="tag is-info">Básico</span>
            <span class="tag is-link">Medio</span>
          </div>

        </span>
      </Card>

    </div>

  </div>

</div>