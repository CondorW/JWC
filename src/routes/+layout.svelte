<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Gdprmodal from '../components/Gdprmodal.svelte';
	
</script>

<html lang="english" data-theme="halloween" />
<!-- Sets the theme -->

<body class="flex flex-col min-h-screen">
	<!-- Navbar -->
	<div class="navbar bg-base-300">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Data Estate Austria</a>
		</div>
		<div class="flex-none">
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
					/></svg
				>
			</button>
		</div>
	</div>
	<!-- Hero Section Content -->
	<Gdprmodal />
	<slot />
</body>
<footer class="mt-auto">
	<Footer />
</footer>
