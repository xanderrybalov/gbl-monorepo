<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	export let mainImage: string;
	export let season: string;
	export let year: number;
	export let onImageLoad: () => void;
	export let isLoaded: boolean;
</script>

<div
	class="relative h-full"
	in:fly={{ x: 60, duration: 600, opacity: 1, easing: cubicOut }}
	out:fly={{ x: -60, duration: 600, opacity: 0, easing: cubicOut }}
>
	<!-- Placeholder -->
	<div
		class="absolute inset-0 animate-pulse bg-gray-200"
		class:opacity-0={isLoaded}
		class:hidden={isLoaded}
	></div>

	<img
		src={mainImage}
		alt={`${season} ${year} collection main view`}
		class="h-full w-full transform-gpu object-cover transition-opacity duration-300 ease-in-out"
		class:opacity-0={!isLoaded}
		loading="lazy"
		onload={onImageLoad}
	/>
</div>
