<script>
	import '../app.css'

	let sections = [
		{ name: 'Beranda', link: '#home' },
		{ name: 'Tentang Saya', link: '#about' },
		{ name: 'Portofolio', link: '#portofolio' },
		{ name: 'Kontak', link: '#contact' }
	];

	function toogleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<style>
	/* .glass-effect {
		background: rgba(248, 248, 248, 0.8);
		backdrop-filter: blur(10px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	} */
</style>

<header class="backdrop-blur-sm drop-shadow-md fixed top-0 left-0 w-full z-10 p-4 flex justify-between items-center">
	<div class="font-serif1 text-2xl font-extrabold text-primary ml-4">Awan Ardy</div>

	<!-- Hamburger -->
	<button class="block md:hidden text-black focus:outline-none" onclick={toggleMenu} aria-label={isMenuOpen  ? "Tutup menu navigasi" : "Buka menu navigasi"}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>

	<!-- Desktop Navbar -->
	<nav class="hidden md:flex space-x-8 text-black text-lg font-serif1 font-semibold">
		{#each sections as section}
			<a href={section.link} class="hover:text-primary transition duration-300">{section.name}</a>
		{/each}
	</nav>

	<!-- Mobile Navbar -->
	{#if isMenuOpen}
		<nav class="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col space-y-4 p-4 text-black text-lg font-serif1 font-semibold md:hidden">
			{#each sections as section}
				<a href="{section.link}" class="hover:text-primary transition duration-300" onclick={() => (isMenuOpen = false)}>
					{section.name}
				</a>
			{/each}
		</nav>
	{/if}
</header>

<slot />