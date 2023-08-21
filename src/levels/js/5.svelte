<script lang="javascript">
	import Choose from '$lib/Choose.svelte';

	let code = `
let high Score
`;

	let answers = [
		{text: 'Contiene una letra mayúscula', correct: false},
		{text: 'Contiene un espacio', correct: true}
	]

</script>

<Choose shuffle="true" codeBlock={code} answers={answers}>
	<span slot="text">
		Para ayudarnos a comprender qué hay dentro de una variable, elegimos nombres descriptivos
	</span>

	<span slot="back"> XXX por detrás </span>
</Choose>
