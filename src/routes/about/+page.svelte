<script>
	import { base } from '$app/paths';
</script>

<div class="container is-max-widescreen my-4 px-2 has-background-white">
	<nav class="navbar breadcrumb mb-0" aria-label="breadcrumbs">
		<div class="container is-max-widescreen block px-2">
			<ul>
				<li><a href="{base}/"><b>~</b></a></li>
				<li><a href="{base}/about">Acerca de</a></li>
			</ul>
		</div>
	</nav>

	<h1 class="is-size-4 has-text-weight-semibold px-1">Acerca de</h1>

	<div class="block is-size-5-mobile is-size-5-tablet is-size-5-desktop mt-1">
		¿Te imaginas que un día se juntan tus pasiones de docencia, desarrollo y unas ganas locas por
		seguir jugando con tecnología que desconoces? Así es como con azúcar, especias y muchos commits
		bonitos (que eran los ingredientes para crear una app perfecta, junto con algún que otro
		contratiempo), nació <b>CodiQuest</b>.
	</div>

	<div class="columns">
		<div class="column is-narrow is-centered">
			<span>
				<img class="image is-128x128" src="{base}/favicon.png" alt="Have a Codi day!" /><br />
				<span>💙 ¡Hola soy <strong>Codi</strong>!</span>
			</span>
		</div>
		<div class="column is-size-5-mobile is-size-5-tablet is-size-5-desktop">
			CodiQuest, es una plataforma de creación de contenido estático que parte de la idea de crear
			una aplicación para la creación de cuestionarios que ayuden a otras personas a asimilar
			conceptos de tecnología y programación. Nace en 2023 a partir de un pet project desarrollado
			principalmente en Svelte con Javascript Vanilla. De momento la aplicación no almacena datos
			del usuario ni cookies ni nada parecido (de hecho, si vuelves atrás en un nivel, ¡podrás
			volverlo a resolver! 😃)
		</div>
	</div>

	<div class="block is-size-5-mobile is-size-5-tablet is-size-5-desktop">
		El código es totalmente libre y puedes montar una plataforma similar con pocos clics. Revisa la
		información del repositorio en <a href="https://github.com/moiseslodeiro/codiquest">Github</a>
		para más información. Si quieres conocer más sobre el mi, el creador (ojú), puedes seguirme en
		<a href="https://twitter.com/MoisesLodeiro">𝕏 (twitter)</a>, en
		<a href="https://www.linkedin.com/in/moiseslodeiro/">LinkedIn</a> o invitarme a una cerveza si me
		ves en persona 🍻.
	</div>

	<h1 class="is-size-4 has-text-weight-semibold px-1">Contacto</h1>

	<div class="block is-size-5-mobile is-size-5-tablet is-size-5-desktop mt-1">
		Si tienes dudas, sugerencias, quejas o tienes la imperiosa necesidad de hacerme un bizum, puedes
		contactar conmigo (aparte de por <a href="https://twitter.com/MoisesLodeiro">𝕏</a> y
		<a href="https://www.linkedin.com/in/moiseslodeiro/">LinkedIn</a>), puedes hacerlo a través del
		correo electrónico <a href="mailto:codiquest@gmail.com">codiquest@gmail.com</a> o seguir este
		proyecto por <a href="https://twitter.com/CodiQuest">Twitter</a>
	</div>

	<h1 class="is-size-4 has-text-weight-semibold px-1">Librerías y recursos</h1>

	<p class="buttons is-size-5-mobile is-size-5-tablet is-size-5-desktop mt-3">
		<button class="button">
			<span class="icon">
				<svg width="512" height="512" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#ff3e00"
						d="M110.43 16.936C98.553-.076 75.09-5.118 58.13 5.696l-29.792 19a34.198 34.198 0 0 0-15.48 22.897a25.478 30.64 0 0 0-.572 6.396a36.15 36.15 0 0 0 4.163 16.73A34.396 34.396 0 0 0 11.34 83.5a25.348 30.483 0 0 0 .345 14.412a36.48 36.48 0 0 0 5.9 13.152c11.878 17.01 35.394 22.053 52.3 11.24l29.762-19.001a34.128 34.128 0 0 0 15.438-22.918a35.52 35.52 0 0 0 .572-6.386a36.183 36.183 0 0 0-4.112-16.71a34.396 34.396 0 0 0 5.112-12.77c.369-2.11.557-4.245.562-6.386a36.41 36.41 0 0 0-6.787-21.178z"
					/>
					<path
						fill="#fff"
						d="M55.219 112.662a28.463 34.23 0 0 1-5.954.76a23.638 23.638 0 0 1-19.435-10.187a21.89 21.89 0 0 1-4.08-12.74a15.658 18.83 0 0 1 .333-3.833a15.425 18.55 0 0 1 .72-2.782l.561-1.708l1.52 1.156a38.646 38.646 0 0 0 11.658 5.834l1.104.333l-.104 1.104v.573a6.625 6.625 0 0 0 1.228 3.854a7.092 7.092 0 0 0 2.538 2.288a8.262 9.936 0 0 0 3.312.837a8.251 9.923 0 0 0 1.79-.229a7.272 8.745 0 0 0 1.833-.802l29.76-19.094a6.258 6.258 0 0 0 2.904-5.302a6.62 6.62 0 0 0-1.26-3.844a7.137 7.137 0 0 0-2.553-2.252a8.313 9.997 0 0 0-3.307-.81a8.246 9.917 0 0 0-1.79.23a6.938 8.344 0 0 0-1.822.801l-11.346 7.25a24.376 29.314 0 0 1-6.048 2.656a23.643 23.643 0 0 1-25.39-9.416a21.944 21.944 0 0 1-4.08-12.74c.002-1.285.114-2.567.333-3.833a20.653 20.653 0 0 1 9.286-13.781l29.792-18.99a21.863 21.863 0 0 1 6.048-2.667a23.963 23.963 0 0 1 5.954-.75A23.675 23.675 0 0 1 98.22 24.745a21.937 21.937 0 0 1 4.029 12.75a15.748 18.939 0 0 1-.334 3.844a15.407 18.529 0 0 1-.718 2.781l-.562 1.708l-1.52-1.114a38.414 38.414 0 0 0-11.658-5.834l-1.104-.343l.104-1.105v-.572a6.7 6.7 0 0 0-1.228-3.865a7.128 7.128 0 0 0-2.55-2.25a8.309 9.992 0 0 0-3.3-.813a8.221 9.887 0 0 0-1.77.271a6.819 8.2 0 0 0-1.831.802l-29.793 18.99a5.88 7.071 0 0 0-1.836 1.79a4.75 5.713 0 0 0-.963 2.377a5.037 6.057 0 0 0-.136 1.104a6.62 6.62 0 0 0 1.228 3.844a7.116 7.116 0 0 0 2.549 2.25a8.299 9.98 0 0 0 3.301.812a8.247 9.918 0 0 0 1.79-.23a6.943 8.35 0 0 0 1.833-.801l11.367-7.292a24.218 29.125 0 0 1 6.048-2.656a28.526 34.305 0 0 1 5.954-.76A23.662 23.662 0 0 1 96.566 60.61a21.94 21.94 0 0 1 3.737 16.614a20.603 20.603 0 0 1-9.286 13.781l-29.74 18.99a24.308 29.233 0 0 1-6.057 2.667z"
					/>
				</svg>
			</span>
			<span>Svelte</span>
		</button>

		<button class="button">
			<span class="icon">
				<svg height="24" viewBox="0 0 256 373" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#00D1B2"
						d="M0 256L23.273 93.091L116.364 0l116.363 116.364l-69.818 69.818L256 279.273l-139.636 93.091z"
					/>
				</svg>
			</span>
			<span>Bulma</span>
		</button>

		<button class="button">
			<span class="icon">
				<svg width="512" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="currentColor"
						d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426c0 0-1.811.199-4.551 2.08c-.575-.16-1.548-.238-2.519-.238c-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002l1.732-.002c1.506 0 7.467-.115 7.467-7.301c0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115c0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531c.735.676 1.045 1.49 1.045 2.369c0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801c.719 0 1.301-.807 1.301-1.801c0-.992-.582-1.799-1.301-1.799z"
					/>
				</svg>
			</span>
			<span>Github Pages</span>
		</button>

		<button class="button">
			<span class="icon">
				<svg height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="currentColor"
						d="M19.848 1.636c-.106-.016-.228.107-.324.397c-.157.47-1.073 3.203-5.504 4.326c.596.512.976 1.242.976 2.059c0 1.547-1.344 2.8-3 2.8c-1.655 0-2.997-1.254-2.998-2.8c0-.603.208-1.158.555-1.616c-3.135-.322-4.49-3.123-4.49-3.123l-.096 4.163c-.025.564-.009 1.111-.27 1.636a3.335 2.365 54.527 0 0-.05-.072a3.335 2.365 54.527 0 0-2.849-1.654a3.335 2.365 54.527 0 0-1.013.334a3.335 2.365 54.527 0 0 .029 4.095a3.335 2.365 54.527 0 0 3.291 1.59c2.997 2.22 8.482 4.148 12.231 1.885l-2.025-1.629c-1.064.345-2.604.34-4.397-.295c2.9.582 4.47-.053 5.334-.722c-.228-.296-.71-.526-.71-.526s.563.107.93.496c.147.155.198.387.218.653c.553.298 1.183.656 1.875 1.062c2.06-2.06 3.253-5.933 2.52-12.617c-.035-.269-.127-.425-.233-.442zM6.855 7.096c1.051-.001 1.903.795 1.903 1.777c0 .98-.853 1.776-1.903 1.775c-1.05 0-1.9-.795-1.9-1.775c0-.981.85-1.777 1.9-1.778zm5.776.482a1.325 1.325 0 1 0-.002 2.65a1.325 1.325 0 0 0 .002-2.65zm-10.942.639a.964.947 0 0 1 .002 0a.964.947 0 0 1 .021 0a.964.947 0 0 1 .965.949a.964.947 0 0 1-.965.947a.964.947 0 0 1-.962-.947a.964.947 0 0 1 .94-.95zm5.559.123a.84.84 0 1 0 .02 1.68a.84.84 0 0 0-.02-1.68zm8.26 4.964c-.043.053-.103.099-.156.147l.21.115c-.017-.1-.033-.21-.054-.262zm-.55.1l-.733.361l.06.05l.198.157l1.994 1.606l.015.012a81.76 81.76 0 0 0 1.952 1.513a.543.543 0 0 0-.008.127l.26-.04l.103.152l2.317 1.472c-.12.41-.065.953.207 1.457c.79 1.465 2.677 2.094 2.677 2.094c-.771-1.968-.209-3.569-1.73-4.133c-.242-.09-.453-.093-.629-.033l-2.047-1.895l-.174-.052l-.025-.262a.839.839 0 0 0-.12.059c-.306-.26-.687-.537-1.09-.815c-1.364-.835-2.257-1.3-3.228-1.83z"
					/>
				</svg>
			</span>
			<span>Gimp</span>
		</button>

		<button class="button">
			<span class="icon">
				<svg width="32" height="24" viewBox="0 0 256 388" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<radialGradient
							id="logosBing0"
							cx="93.717%"
							cy="77.818%"
							r="143.121%"
							fx="93.717%"
							fy="77.818%"
							gradientTransform="scale(-1 -.71954) rotate(49.091 2.036 -2.204)"
						>
							<stop offset="0%" stop-color="#00CACC" />
							<stop offset="100%" stop-color="#048FCE" />
						</radialGradient>
						<radialGradient
							id="logosBing1"
							cx="13.893%"
							cy="71.448%"
							r="150.086%"
							fx="13.893%"
							fy="71.448%"
							gradientTransform="matrix(.55155 -.39387 .23634 .91917 -.107 .112)"
						>
							<stop offset="0%" stop-color="#00BBEC" />
							<stop offset="100%" stop-color="#2756A9" />
						</radialGradient>
						<linearGradient id="logosBing2" x1="50%" x2="50%" y1="0%" y2="100%">
							<stop offset="0%" stop-color="#00BBEC" />
							<stop offset="100%" stop-color="#2756A9" />
						</linearGradient>
					</defs>
					<path
						fill="url(#logosBing0)"
						d="M129.424 122.047c-7.133.829-12.573 6.622-13.079 13.928c-.218 3.147-.15 3.36 6.986 21.722c16.233 41.774 20.166 51.828 20.827 53.243c1.603 3.427 3.856 6.65 6.672 9.544c2.16 2.22 3.585 3.414 5.994 5.024c4.236 2.829 6.337 3.61 22.818 8.49c16.053 4.754 24.824 7.913 32.381 11.664c9.791 4.86 16.623 10.387 20.944 16.946c3.1 4.706 5.846 13.145 7.04 21.64c.468 3.321.47 10.661.006 13.663c-1.008 6.516-3.021 11.976-6.101 16.545c-1.638 2.43-1.068 2.023 1.313-.939c6.74-8.379 13.605-22.7 17.108-35.687c4.24-15.718 4.817-32.596 1.66-48.57c-6.147-31.108-25.786-57.955-53.444-73.06c-1.738-.95-8.357-4.42-17.331-9.085a1633.23 1633.23 0 0 1-4.127-2.154c-.907-.477-2.764-1.447-4.126-2.154c-1.362-.708-5.282-2.75-8.711-4.539l-8.528-4.446a6021.14 6021.14 0 0 1-8.344-4.357c-8.893-4.655-12.657-6.537-13.73-6.863c-1.125-.343-3.984-.782-4.701-.723c-.152.012-.838.088-1.527.168Z"
					/>
					<path
						fill="url(#logosBing1)"
						d="M148.81 277.994c-.493.292-1.184.714-1.537.938c-.354.225-1.137.712-1.743 1.083a8315.383 8315.383 0 0 0-13.204 8.137a2847.83 2847.83 0 0 0-8.07 4.997a388.04 388.04 0 0 1-3.576 2.198c-.454.271-2.393 1.465-4.31 2.654a2651.466 2651.466 0 0 1-7.427 4.586a3958.037 3958.037 0 0 0-8.62 5.316a3011.146 3011.146 0 0 1-7.518 4.637c-1.564.959-3.008 1.885-3.21 2.058c-.3.257-14.205 8.87-21.182 13.121c-5.3 3.228-11.43 5.387-17.705 6.235c-2.921.395-8.45.396-11.363.003c-7.9-1.067-15.176-4.013-21.409-8.666c-2.444-1.826-7.047-6.425-8.806-8.8c-4.147-5.598-6.829-11.602-8.218-18.396c-.32-1.564-.622-2.884-.672-2.935c-.13-.13.105 2.231.528 5.319c.44 3.211 1.377 7.856 2.387 11.829c7.814 30.743 30.05 55.749 60.15 67.646c8.668 3.424 17.415 5.582 26.932 6.64c3.576.4 13.699.56 17.43.276c17.117-1.296 32.02-6.334 47.308-15.996c1.362-.86 3.92-2.474 5.685-3.585a877.227 877.227 0 0 0 4.952-3.14c.958-.615 2.114-1.341 2.567-1.614a91.312 91.312 0 0 0 2.018-1.268c.656-.424 3.461-2.2 6.235-3.944l11.092-7.006l3.809-2.406l.137-.086l.42-.265l.199-.126l2.804-1.771l9.69-6.121c12.348-7.759 16.03-10.483 21.766-16.102c2.392-2.342 5.997-6.34 6.176-6.848c.037-.104.678-1.092 1.424-2.197c3.036-4.492 5.06-9.995 6.064-16.484c.465-3.002.462-10.342-.005-13.663c-.903-6.42-2.955-13.702-5.167-18.339c-3.627-7.603-11.353-14.512-22.453-20.076c-3.065-1.537-6.23-2.943-6.583-2.924c-.168.009-10.497 6.322-22.954 14.03c-12.457 7.71-23.268 14.4-24.025 14.87a289.98 289.98 0 0 1-2.888 1.764l-7.128 4.42Z"
					/>
					<path
						fill="url(#logosBing2)"
						d="m.053 241.013l.054 53.689l.695 3.118c2.172 9.747 5.937 16.775 12.482 23.302c3.078 3.07 5.432 4.922 8.768 6.896c7.06 4.177 14.657 6.238 22.978 6.235c8.716-.005 16.256-2.179 24.025-6.928c1.311-.801 6.449-3.964 11.416-7.029l9.032-5.572v-127.4l-.002-58.273c-.002-37.177-.07-59.256-.188-60.988c-.74-10.885-5.293-20.892-12.948-28.461c-2.349-2.323-4.356-3.875-10.336-7.99a25160.08 25160.08 0 0 1-12.104-8.336A186532.885 186532.885 0 0 0 28.617 5.835C22.838 1.85 22.386 1.574 20.639.949C18.367.136 15.959-.163 13.67.084C6.998.804 1.657 5.622.269 12.171C.053 13.191.013 26.751.01 100.35l-.003 86.975H0l.053 53.688Z"
					/>
				</svg>
			</span>
			<span>Bing</span>
		</button>

		<button class="button">
			<span class="icon">
				<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="currentColor"
						d="M464 256a208 208 0 1 0-416 0a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0zm177.6 62.1c15.2 16.4 41.2 33.9 78.4 33.9s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0a32 32 0 1 1-64 0zm192-32a32 32 0 1 1 0 64a32 32 0 1 1 0-64z"
					/>
				</svg>
			</span>
			<span>IconBuddy</span>
		</button>
	</p>
</div>
