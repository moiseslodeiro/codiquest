<script>
  import { base } from '$app/paths';

  export let type = '';
  export let message = undefined;
  export let icon = undefined;
  export let label = undefined;
  export let colorClass = undefined;
  export let iconSize = 6;

  switch (type.toUpperCase()) {
    case 'NOTE':
      icon = icon || 'info';
      label = label || 'Note';
      colorClass = 'border-blue-500 text-blue-800';
      break;
    case 'TIP':
      icon = icon || 'lightbulb';
      label = label || 'Tip';
      colorClass = 'border-blue-500 text-cyan-800';
      break;
    case 'IMPORTANT':
      icon = icon || 'important';
      label = 'Important';
      colorClass = 'border-purple-500 text-purple-800';
      break;
    case 'WARNING':
      icon = icon || 'warning';
      label = label || 'Warning';
      colorClass = 'border-yellow-600 text-yellow-900';
      break;
    case 'CAUTION':
      icon = icon || 'caution';
      label = label || 'Caution';
      colorClass = 'border-orange-600 text-orange-900';
      break;
    default:
      icon = icon || 'info';
      label = label || 'Note';
      colorClass = colorClass || 'border-gray-400 text-gray-800 bg-gray-50';
  }
</script>

<div class={`flex gap-3 border-l-4 p-4 my-2 ${colorClass}`}>
  <div class="pt-1">
    <img src={`${base}/icons/${icon}.svg`} alt="icon" class="w-{iconSize} h-{iconSize}" />
  </div>
  <div>
    <h3 class="font-semibold mb-1">{label}</h3>
    <div class="text-sm">
      <slot>{message}</slot>
    </div>
  </div>
</div>
