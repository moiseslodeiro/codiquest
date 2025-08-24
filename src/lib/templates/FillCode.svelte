<script>
  import Gaps from '$lib/components/Gap.svelte';
  import Tab from '$lib/components/Tab.svelte';
  import IconList from '$lib/components/IconList.svelte';
  import { sanitize } from '$lib/utils/sanitize.js';
  import NextLevelButton from '$lib/components/NextLevelButton.svelte';
  import PrevLevelButton from '$lib/components/PrevLevelButton.svelte';

  export let text = '';
  export let title = '';
  export let showLines = true;
  export let codeLang = 'js';
  export let shuffle = true;
  export let codeBlock = ``;
  export let inTestMode = false;
  export let order = -1;
  export let resources = [];
  export let fakeOptions = [];

  $: inTestMode = inTestMode === 'true' || inTestMode === true;
</script>

{#if inTestMode}
  <Gaps {showLines} {codeBlock} {shuffle} {codeLang} {inTestMode} {order} on:message />
{:else}
  {#if title || text}
    <details class="collapse collapse-arrow select-none" open>
      <summary class="collapse-title text-xl antialiased font-semibold pl-0">{title}</summary>
      <div class="collapse-content p-0">
        <p>
          {@html sanitize(text)}
        </p>
      </div>
    </details>
  {/if}

  {#if resources.length > 0}
    <div role="tablist" class="tabs tabs-bordered mt-3">
      <Tab checked="true" title="<>">
        <Gaps
          {showLines}
          {codeBlock}
          {shuffle}
          {codeLang}
          {inTestMode}
          {order}
          {fakeOptions}
          on:message
        />
      </Tab>
      <Tab title="Recursos" icon="list">
        <IconList list={resources} />
      </Tab>
    </div>
  {:else}
    <Gaps
      {showLines}
      {codeBlock}
      {shuffle}
      {codeLang}
      {inTestMode}
      {order}
      {fakeOptions}
      on:message
    />
  {/if}

  {#if !inTestMode}
    <div class="flex w-full my-3 overflow-x-hidden">
      <div class="grid h-20 flex-grow card rounded-box place-items-center">
        <PrevLevelButton message="Lección anterior" />
      </div>
      <div class="divider divider-horizontal"></div>
      <div class="grid h-20 flex-grow card rounded-box place-items-center">
      </div>
    </div>
  {/if}

{/if}
