<script>
  export let content = '';
</script>

<div class="mockup-browser border-base-300 border mb-4">
  <div class="mockup-browser-toolbar"></div>
  <div class="border-base-300 flex flex-col border-t px-4 py-4"><slot>{content}</slot></div>
</div>
