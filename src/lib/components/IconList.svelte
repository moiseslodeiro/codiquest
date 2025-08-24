<script>
  import { base } from '$app/paths';

  export let list = [];

  const icons = {
    'youtube.com': 'youtube.svg',
    'medium.com': 'medium.svg',
    'dev.to': 'dev-to.svg',
    'github.com': 'github.svg',
  };

  function getIcon(url) {
    try {
      const domain = new URL(url);
      if(domain.protocol === 'http:' || domain.protocol === 'https:') {
        const _tld = domain.hostname.split('.').slice(-2).join('.');
        return icons[_tld] || 'url.svg';
      }
    } catch (err) {
      return false;
    }

    return icons[domain.hostname.replace('www.', '')] || 'url.svg';
  }
</script>

<ul class="max-w list-decimal list-inside">
  {#each list as item}
    <li>
      <a href={item.url} target="_blank"
        ><button class="btn btn-sm btn-link no-animation">
          <img
            width="16"
            src="{base}/icons/{getIcon(item.url)}"
            alt={item.title}
            onerror="this.src='{base}/icons/url.svg'"
          />
          {item.title}
        </button>
      </a>
    </li>
  {/each}
</ul>

<style>
  .btn-link {
    text-underline-offset: 5px;
    text-decoration-color: oklch(var(--in));
  }
</style>
