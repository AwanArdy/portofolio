<script>
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	let isVisible = false;
	let observer;
	const dispatch = createEventDispatcher();

	let target;

	onMount(() => {
		observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isVisible = true;
					dispatch('visible');
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (target) observer.observe(target);
	});

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

<div bind:this={target}>
	{#if isVisible}
		<slot />
	{/if}
</div>

<style>
	div {
		min-height: 100px;
	}
</style>

