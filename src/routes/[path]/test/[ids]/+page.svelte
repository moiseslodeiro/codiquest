<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import QuestionTest from '$lib/templates/Test.svelte';
	
	export let tech = $page.params.path;
	export let ids = $page.params.ids;
	ids = ids.split(',');

	function getTests(questions) {
		let questionnaire = [];
		ids.forEach((id) => {
			if (id < questions.length) {
				questionnaire.push(questions[id]);
			}
		});

		return questionnaire;
	}
</script>

<BreadCrumbs
	{tech}
	title="Test de {ids.length} {ids.length > 1 ? 'preguntas' : 'pregunta'}"
	linksTo="{base}/{tech}/test"
/>

{#await import(`../../../../modules/${tech}.js` /* @vite-ignore */)}
	<span class="loading loading-spinner loading-md m-5"></span>
{:then module}
	<div class="flex flex-col w-full border-opacity-50">
		<QuestionTest questions={getTests(module.questions)} />
		<div class="divider">O</div>
		<div class="grid h-20 card bg-base-300 rounded-box place-items-center">
			<a class="btn btn-lg btn-accent btn-block" href="/{tech}/test/random/10"
				>¡Prueba con uno aleatorio!</a
			>
		</div>
	</div>
{:catch error}
	{error}
{/await}
