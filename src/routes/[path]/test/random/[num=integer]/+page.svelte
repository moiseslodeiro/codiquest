<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import QuestionTest from '$lib/templates/Test.svelte';

	export let num = $page.params.num;
	export let tech = $page.params.path;

	function getRandomList(elementList, limit) {
		return elementList
			.slice()
			.sort(() => {
				return Math.random() - 0.5;
			})
			.slice(0, limit);
	}

	let finalQuestions = [];
	let finalQuestionsIds = [];
	onMount(async () => {
		const questions = await import(`../../../../../modules/${tech}.js`);

		questions.questions.map((element, index) => {
			return (element.realId = index);
		});

		finalQuestions = getRandomList(questions.questions, num);
		finalQuestionsIds = finalQuestions.map((o) => o.realId);
	});
</script>

<BreadCrumbs {tech} title="Test aleatorio de {num} {num > 1 ? 'preguntas' : 'pregunta'}" />

{#await import(`../../../../../modules/${tech}.js` /* @vite-ignore */)}
	<span class="loading loading-spinner loading-md m-5"></span>
{:then module}
	<QuestionTest questions={finalQuestions} />
	<a class="btn btn-lg btn-accent btn-block" href="/{tech}/test/{finalQuestionsIds.join(',')}"
		>Repite el mismo cuestionario</a
	>
{:catch error}
	{error}
{/await}
