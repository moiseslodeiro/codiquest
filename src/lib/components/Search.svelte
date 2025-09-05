<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import { goto } from '$app/navigation';

  let searchTerm = '';
  let allModulesData = [];
  let filteredModules = [];
  let dropdownOpen = false;

  let inputEl;
  let desktopInputEl;
  let isMobile = false;
  let dialogEl;

  function detectMobile() {
    isMobile = window.matchMedia('(max-width: 767px)').matches;
  }

  onMount(() => {
    loadModules();
    detectMobile();
    window.addEventListener('resize', detectMobile);
    window.addEventListener('keydown', handleKeydown);
  });
  onDestroy(() => {
    window.removeEventListener('resize', detectMobile);
    window.removeEventListener('keydown', handleKeydown);
  });

  async function loadModules() {
    try {
      const moduleFiles = import.meta.glob('../../modules/*.js');
      const levelsFiles = import.meta.glob('../../modules/**/levels.auto.js');
      const modulePromises = Object.keys(moduleFiles).map(async (path) => {
        const { moduleInfo } = await moduleFiles[path]();
        const moduleName = path.match(/\/(\w+)\.js$/)[1];
        return { moduleName, moduleInfo };
      });
      const modules = await Promise.all(modulePromises);
      const levelsPromises = Object.keys(levelsFiles).map(async (path) => {
        const { levels } = await levelsFiles[path]();
        const moduleName = path.split('/').slice(-2, -1)[0];
        return { moduleName, levels };
      });
      const levels = await Promise.all(levelsPromises);
      const combinedData = modules.map((m) => {
        const levelsData = levels.find((l) => l.moduleName === m.moduleName)?.levels;
        return { ...m, levelsData };
      });
      allModulesData = combinedData.flatMap((m) =>
        m.levelsData
          ? m.levelsData.map((level) => ({
              module: { name: m.moduleInfo.title, path: m.moduleName },
              page: level.page,
              title: level.title || '',
              labels: level.labels || []
            }))
          : []
      );
    } catch (error) {
      console.error('Error al cargar los módulos:', error);
    }
  }

  function searchKeyword(keyword) {
    const qWords = keyword.toLowerCase().trim().split(/\s+/);
    if (!qWords.length) return [];
    return allModulesData.filter((item) =>
      qWords.every(
        (word) =>
          item.labels?.some((l) => l.toLowerCase().includes(word)) ||
          item.title?.toLowerCase().includes(word)
      )
    );
  }

  $: filteredModules = searchTerm.trim() ? searchKeyword(searchTerm) : [];
  $: dropdownOpen = !!(searchTerm.trim() && !isMobile);

  async function openSearchModal() {
    if (dialogEl) {
      dialogEl.showModal();
      await tick();
      inputEl?.focus();
    }
  }

  function closeSearchModal() {
    if (dialogEl) {
      dialogEl.close();
    }
    searchTerm = '';
  }

  function handleBackdropClick(event) {
    if (event.target === dialogEl) {
      closeSearchModal();
    }
  }

  function handleKeydown(evt) {
    if (dialogEl?.open && evt.key === 'Escape') {
      closeSearchModal();
    }
    if (
      dialogEl?.open &&
      evt.key === 'Enter' &&
      filteredModules.length > 0 &&
      document.activeElement === inputEl
    ) {
      const first = filteredModules[0];
      goto(`/${first.module.path}/${first.page}`);
      closeSearchModal();
    }
    if (
      !isMobile &&
      evt.key === 'Enter' &&
      dropdownOpen &&
      filteredModules.length > 0 &&
      document.activeElement === desktopInputEl
    ) {
      const first = filteredModules[0];
      goto(`/${first.module.path}/${first.page}`);
      dropdownOpen = false;
    }
  }
</script>

<div class="hidden md:block relative w-full max-w-xl mx-auto">
  <label
    class="input input-bordered flex items-center gap-2 w-full bg-neutral-100 text-blue-950"
    data-theme="synthwave"
  >
    <input
      bind:this={desktopInputEl}
      type="text"
      class="grow"
      placeholder="Buscar…"
      bind:value={searchTerm}
      on:focus={() => (dropdownOpen = !!searchTerm.trim())}
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="h-4 w-4 opacity-70"
    >
      <path
        fill-rule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clip-rule="evenodd"
      />
    </svg>
  </label>
  {#if dropdownOpen}
    <ul
      class="absolute left-0 right-0 mt-1 bg-base-200 border border-base-300 rounded-box shadow-lg z-50 max-h-80 overflow-y-auto w-full"
    >
      {#if filteredModules.length > 0}
        {#each filteredModules as item}
          <li>
            <a
              href={`/${item.module.path}/${item.page}`}
              class="flex items-center justify-between px-3 py-2 hover:bg-base-300 transition"
              on:click={() => (dropdownOpen = false)}
            >
              <span class="font-medium">{item.title || item.page}</span>
              <span class="text-xs opacity-70">{item.module.name}</span>
            </a>
          </li>
        {/each}
      {:else}
        <li class="px-3 py-2 text-sm opacity-70">Sin resultados</li>
      {/if}
    </ul>
  {/if}
</div>

<div class="block md:hidden">
  <button class="btn btn-ghost" aria-label="Buscar" on:click={openSearchModal}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
      />
    </svg>
  </button>
  <dialog
    bind:this={dialogEl}
    class="modal"
    style="
    position: fixed;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 95vw;
    max-width: 600px;
    height: 45vh; /* estándar: 50% de altura */
    border-radius: 0.75rem;
    margin: 0;
    overflow: hidden;
    z-index: 9999;
  "
    on:click={handleBackdropClick}
  >
    <form method="dialog" class="modal-box flex flex-col p-4 h-full" on:click|stopPropagation>
      <button
        type="button"
        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        on:click={closeSearchModal}
      >
        ✕
      </button>

      <label
        class="input input-bordered flex items-center gap-2 w-full bg-neutral-100 text-blue-950 mb-3"
      >
        <input
          bind:this={inputEl}
          type="text"
          class="grow"
          placeholder="Buscar…"
          bind:value={searchTerm}
          on:input={() => (dropdownOpen = true)}
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </label>

      <div class="overflow-y-auto flex-1 rounded-b-box">
        {#if filteredModules.length > 0}
          <ul>
            {#each filteredModules as item}
              <li>
                <a
                  href={`/${item.module.path}/${item.page}`}
                  class="flex items-center justify-between px-3 py-2 hover:bg-base-300 transition rounded-box"
                  on:click={closeSearchModal}
                >
                  <span class="font-medium">{item.title || item.page}</span>
                  <span class="text-xs opacity-70">{item.module.name}</span>
                </a>
              </li>
            {/each}
          </ul>
        {:else if searchTerm.trim()}
          <p class="px-3 py-2 text-center text-sm opacity-70">Sin resultados</p>
        {/if}
      </div>
    </form>
  </dialog>
</div>
