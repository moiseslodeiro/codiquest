<script>
	import { base } from '$app/paths';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import Card from '$lib/components/Card.svelte';
	import Error from '$lib/components/Error.svelte';

	const modules = import.meta.glob('../modules/*.js');
	const availableModules = [];

	Object.keys(modules).forEach((key) => {
		availableModules.push(key.replace(/^.*[\\\/]/, '').replace(/^(.*)\.[a-z]{1,}$/, '$1'));
	});
</script>

<BreadCrumbs title="Inicio" linksTo="{base}/" />
<div class="container md:mx-auto py-2">
	<h1 class="text-2xl mt-2">Hello world!</h1>
	<article class="mt-2 leading-relaxed text-lg">
		<p>
			<strong>¡Hola a tod@s!</strong> ¡Bienvenidos a CodiQuest! Acompaña a Codi en su aprendizaje,
			explora los diferentes módulos, niveles y cuestionarios que conforman la plataforma, ¡descubre
			todo lo que puedes lograr!. Si deseas saber más sobre el proyecto, no dudes en visitar la
			sección "<a
				class="link decoration-2 decoration-emerald-500 underline-offset-8 internal"
				href="{base}/about">Acerca de</a
			>". ¡Nos vemos en la pantalla!
		</p>
	</article>
</div>

<hr class="my-5" />
<div class="container md:mx-auto py-2">
	<div class="flex flex-wrap mt-auto">

		{#each availableModules as modulePath}
			{#await import(`../modules/${modulePath}.js`)}
				<span class="loading loading-spinner loading-md m-5" style="display: none;"></span>
			{:then module}
				{#if module.moduleInfo.public}
					<Card
						title={module.moduleInfo.title}
						color="decoration-amber-500"
						isNew={module.moduleInfo.isNew}
						linksTo={module.moduleInfo.linksTo || modulePath}
						image={module.moduleInfo.image}
						tags={module.moduleInfo.tags}
					>
						{module.moduleInfo.shortDescription}
					</Card>
				{/if}
			{:catch error}
				<Error icon="cody/bsod" title="Módulo no encontrado" message="500: {error}" type="error" />
			{/await}
		{/each}
	</div>
</div>
