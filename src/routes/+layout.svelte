<script>
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';
  export let data;
</script>

<nav class="navbar bg-base-100" data-theme="synthwave">
  <div class="container md:mx-auto max-w-5xl">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="{base}/">
        <img src="{base}/favicon.png" alt="¡Hola! Soy Codi :-)" width="32" height="32" />
        <span class="max-md:hidden">CodiQuest</span>
          <div class="badge badge-secondary">Alpha</div>
      </a>
    </div>
    <div class="flex-none z-10">
      <ul class="menu menu-horizontal px-1">
        <li><a href="{base}/docs">Documentación</a></li>
        <li><a href="{base}/about">Acerca de</a></li>
      </ul>
    </div>
  </div>
</nav>


<main class="container md:mx-auto py-2 md:max-w-5xl sm:px-3">
  <div></div>

<div role="alert" class="alert">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
  <span>Estamos en fase de pruebas y mejoras, disculpen las molestias si hay algo que se rompe o está mal</span>
</div>

  {#key data.url}
    <div
      class="max-sm:mx-3"
      in:fly={{ x: -200, duration: 300, delay: 300 }}
      out:fly={{ duration: 300 }}
    >
      <slot />
    </div>
  {/key}
</main>

<footer class="footer items-center p-4 bg-neutral text-neutral-content sticky top-[100vh] mt-5">
  <aside class="items-center grid-flow-col">
    <img src="{base}/img/codi/favicon.webp" alt="It's a me! Codi!" class="h-4 w-4" />
    <p>Basado en <a href="https://github.com/moiseslodeiro/codiquest" target="_blank">CodiQuest</a> - <a href="{base}/LICENSE" target="_blank">Licencia MIT</a></p>
  </aside>
  <nav class="grid-flow-col float-right gap-4 md:justify-self-end">
    <a target="_blank" aria-label="Visítanos en X!" href="https://twitter.com/codiquest"
      ><svg alt="Twitter/X" class="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
        />
      </svg>
    </a>
  </nav>
</footer>
