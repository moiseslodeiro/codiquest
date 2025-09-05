
<!-- File created automatically by Codiquest Converter, do not modify because changes may be lost -->
<script>
  import Alert from '$lib/components/Alert.svelte';
  import Code from '$lib/components/Code.svelte';
  import Message from '$lib/components/Message.svelte';
  import ModalImage from '$lib/components/ModalImage.svelte';
  import Page from '$lib/templates/Page.svelte';
  import File from '$lib/components/File.svelte';
  import Browser from '$lib/components/Browser.svelte';
  import { base } from '$app/paths';
</script><Page><p>Markdown es el lenguaje que usamos en Codiquest para escribir textos con formato de forma rápida y legible. Es como escribir en texto plano, pero vitaminado con <a href="https://es.wikipedia.org/wiki/Gofio" class="link link-primary wikipedia" target="_blank" rel="noopener noreferrer">gofio</a> una vez que se convierte. Con Markdown (ficheros con extensión <code>.md</code>), puedes:</p>
<ul>
<li>Poner títulos usando <code>#</code>.</li>
<li>Poner subtítulos (y consecutivos) usando <code>##</code>, <code>###</code>, etc.</li>
<li>Poner listas numéricas o normales con <code>-</code> o <code>*</code>.</li>
<li>Resaltar cosas en <strong>negrita</strong> o <em>cursiva</em> con <code>**negrita**</code> y <code>*cursiva*</code>, respectivamente.</li>
<li>E, incluso, meter enlaces, imágenes o bloques de código personalizados.</li>
</ul>
<p>Aunque a estas alturas ya puedas suponerlo, todos los módulos que puedes ver en la documentación de Codiquest se han hecho así, partiendo de un fichero Markdown. A continuación, se muestra un ejemplo básico de un fichero <code>.md</code>:</p>
<File icon="markdown" route="src,raw,test" name="test.md" codeLang="markdown">
# Título Principal

Este es un archivo Markdown básico. A continuación se muestran algunos ejemplos de sintaxis comunes (más adelante veremos sintaxis extendida)

##  Subtítulo

Aquí puedes escribir párrafos normales. Markdown te permite **resaltar en negrita**, *en cursiva*, o incluso ***ambos estilos a la vez***.

## # Lista

- Elemento 1
- Elemento 2
- Elemento 3

## # Lista numerada

1. Primer paso
2. Segundo paso
3. Tercer paso

## # Enlace

Puedes visitar [Codiquest](https://www.codiquest.com) para más información.

## # Imagen

![Texto alternativo](/static/img/logo.png)
![Texto alternativo](/static/img/logo.png?size=...&amp;align=...) &lt;-- Este no es un estándar de Markdown, pero se puede usar con total compatibilidad

## # Bloque de código

```js
function sum(a, b) &#123;
  return a + b;
&#125;
console.log(sum(1, 2)));
```

## # Cita

&gt; Esto es una cita.
&gt; Se puede extender en varias líneas.

## # Línea horizontal

---
</File><blockquote>
<Message type="NOTE">Aunque el uso de Markdown no es obligatorio, sí que es recomendable, ya que te ahorra mucho tiempo a la hora de estructurar, vincular y dar formato a las páginas. Además, tiene la ventaja de que es compatible con visores de Markdown como el integrado en GitHub, por lo que el formato que le des aquí, en su mayoría, será compatible con lo que puedas ver de forma remota en GitHub (entre otros).</Message></blockquote>
<ModalImage src="img/install/compare.png" alignment="center" width="w-5/6" alt="Comparativa Markdown en Codiquest y Github" modal="false" />
</Page>
<style>
ul,
ol {
  padding-left: 1.5rem;
  margin-left: 0;
  margin-bottom: 10px;
}

ul > li,
ol > li {
  #list-style-position: inside;
}

ol > li {
  list-style-type: decimal-leading-zero;
}

ul {
  list-style-type: disc;
  margin-bottom: 10px;
}

ul ul {
  padding-left: 1.25rem;
  list-style-type: circle;
}

ul ul ul {
  padding-left: 1.25rem;
  list-style-type: square;
}

ul ul ul ul {
  padding-left: 1.25rem;
  list-style-type: disc;
}

hr {
  margin: 10px 0 10px 0;
  clear: both;
}

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;}
</style>