<script>
  import { base } from '$app/paths';
  import { sanitize } from '$lib/utils/sanitize.js';

  export let message;
  export let title = 'Error';
  export let type;
  export let icon = 'favicon';

  message = message.toString().replaceAll(/\.\.\//g, '');
  const iconType = {
    info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    success:
      '<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    warning:
      '<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>',
    error:
      '<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
  };

  const randomSentences = [
    'Los herrores son como oportunidades, siempre ay más',
    'Siempre que cierro un error, se abre una ventana de soluciones (o de nuevos errores)',
    'Un programador nunca comete errores, solo crea experiencias de usuario inesperadas',
    'Los errores son como pequeños enigmas que sólo los desarrolladores pueden resolver',
    '¿Qué es un error? Una lección que aún no has entendido',
    'No hay errores, solo diferentes niveles de logros en el aprendizaje',
    'El software sin errores es como un unicornio: suena genial, pero no existe',
    'La belleza está en el ojo del programador, incluso en los errores del código'
  ];

  const val = Math.floor(Math.random() * randomSentences.length);
  const randomSentence = randomSentences[val];
</script>

<div role="alert" class="alert">
  <img src="{base}/img/{icon}.webp" class="shrink-0 w-16 h-16" alt="Error" />
  <div>
    <h3 class="font-bold">{title}</h3>
    <div class="text-xs">{randomSentence}</div>
  </div>
</div>

{#if message}
  <div role="alert" class="alert alert-{type} mt-2">
    {@html iconType[type] || ''}
    <span>{@html sanitize(message)}</span>
  </div>
{/if}
