<script lang="ts">
	import type { CollectionSlide } from './index.js';

	let { currentIndex, slides, setSlide } = $props<{
		currentIndex: number;
		slides: CollectionSlide[];
		setSlide: (index: number) => void;
	}>();
</script>

<div class="flex gap-indicator lg:gap-indicator xl:gap-indicator-xl">
	{#each slides, index}
		<button
			class="h-indicator-size w-indicator-size rounded-full transition-colors duration-300 focus:outline-none"
			class:bg-bg-active={currentIndex === index}
			class:bg-bg-inactive={currentIndex !== index}
			role="tab"
			aria-selected={currentIndex === index}
			aria-label={`Go to slide ${index + 1}`}
			onclick={() => setSlide(index)}
		></button>
	{/each}
</div>
