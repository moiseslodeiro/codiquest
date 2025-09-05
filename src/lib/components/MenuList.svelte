<script>
  export let items = [];
  export let ariaLabel = 'Menú de navegación';
</script>

<nav aria-label={ariaLabel} class="hidden md:block">
  <ul class="menu menu-horizontal px-1">
    {#each items as item}
      <li>
        <a href={item.href}>{item.label}</a>
      </li>
    {/each}
  </ul>
</nav>

<div class="dropdown dropdown-end md:hidden">
  <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">☰</div>
  <ul
    class="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
    aria-label={ariaLabel}
  >
    {#each items as item}
      <li>
        <a href={item.href}>{item.label}</a>
      </li>
    {/each}
  </ul>
</div>
