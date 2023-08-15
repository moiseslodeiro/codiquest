<script>
import { base } from '$app/paths';
export let message;

const SENTENCES = [
    "Los herrores son como oportunidades, siempre ay más",
    "Siempre que cierro un error, se abre una ventana de soluciones",
    "Un programador nunca comete errores, solo crea experiencias de usuario inesperadas",
    "Los errores son como pequeños enigmas que solo los desarrolladores pueden resolver",
    "¿Qué es un error? Una lección que aún no has entendido",
    "No hay errores, solo diferentes niveles de logros en el aprendizaje",
    "El software sin errores es como un unicornio: suena genial, pero no existe",
    "La belleza está en el ojo del programador, incluso en los errores del código",
]

const val = Math.floor(Math.random() * (SENTENCES.length + 1)) - 1;
const randomSentence = SENTENCES[val]

</script>

<main>
    <article>
        <div class="grid">
            <div class="left"><img src="{ base }/glitch.png" alt="Have a Coddy day!"/></div>
            <div class="right">{ randomSentence }</div>
        </div> 
        <footer>{ message }</footer>
    </article>
</main>

<style>

article {
    box-shadow: none;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.left {
    grid-column: 1 / 1;
    grid-row: 1;
 }

.right { 
    grid-column: 2 / 5;
    grid-row: 1;
}


</style>