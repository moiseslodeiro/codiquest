<style>
.layout {
  width: 1366px;
  height: 768px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.grow1 { flex-grow: 1; }
.grow2 { flex-grow: 2; }
</style>

<section class="layout">
    <div class="grow1">1</div>
    <div class="grow2">2</div>
    <div class="grow1">3</div>
  </section>