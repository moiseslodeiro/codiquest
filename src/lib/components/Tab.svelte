<script>
  export let checked = false;
  export let title = 'Tab';
  export let inTestMode = false;
  export let name = 'group_tabs';
</script>

<input
  type="radio"
  class="tab"
  class:hidden={inTestMode}
  {name}
  role="tab"
  aria-label={title}
  {checked}
/>

<div role="tabpanel" class="tab-content mt-5 overflow-x-auto">
  <slot />
</div>
