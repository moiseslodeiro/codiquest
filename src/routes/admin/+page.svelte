<script>
  import { base } from '$app/paths';
  import BreadCrumb from '$lib/components/BreadCrumbs.svelte';
</script>

<BreadCrumb title="Secret zone" linksTo="{base}/" />

<div class="flex card lg:card-side bg-base-100">
  <figure class="w-1/4"><img src="{base}/img/nev.webp" alt="Never gonna git you up!" /></figure>
  <div class="w-3/4 card-body">
    <h2 class="card-title">I never gonna <code>git</code> you up!</h2>
    <p>
      Si has llegado hasta aquí, ya sea porque eres una persona curiosa, un juanquer o un amante de
      los admins (😏) te diré que... ¡has sido <b>rickrollead@</b> y es hora de seguir la cadena!
      Ayúdame a seguir repartiendo bits y bytes de conocimiento a todos tus conocidos haciendo clic
      en el siguiente botón: <br /><br />
    </p>
    <div class="card-actions justify-end">
      <a
        href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Emention%7Ctwgr%5ECodiquest&screen_name=Codiquest&text=me%20ha%20%23rickrolleado%20!%20Never%20gonna%20git%20me%20up%20%F0%9F%92%BB"
        class="btn btn-neutral"
        target="_blank"
      >
        <svg class="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
          />
        </svg>
        Tweet #codiquest
      </a>
    </div>
  </div>
</div>
