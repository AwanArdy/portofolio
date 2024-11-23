<script>
	import '../app.css'

	let sections = [
		{ name: 'Beranda', link: '#home' },
		{ name: 'Tentang Saya', link: '#about' },
		{ name: 'Portofolio', link: '#portofolio' },
		{ name: 'Kontak', link: '#contact' }
	];
</script>

<style>
	/* .glass-effect {
		background: rgba(248, 248, 248, 0.8);
		backdrop-filter: blur(10px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	} */
</style>

<header class="backdrop-blur-sm drop-shadow-md fixed top-0 left-0 w-full z-10 p-4 flex justify-between items-center">
	<div class="text-2xl font-bold text-black ml-4">Awan Ardy</div>

	<nav class="flex space-x-8 text-black text-lg font-semibold">
		{#each sections as section}
			<a href={section.link} class="hover:text-primary transition duration-300">{section.name}</a>
		{/each}
	</nav>
</header>

<slot />