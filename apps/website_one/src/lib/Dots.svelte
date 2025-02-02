<script lang="ts">
	import type { CollectionSlide } from './index.js';

	let { currentIndex, slides, setSlide } = $props<{
		currentIndex: number;
		slides: CollectionSlide[];
		setSlide: (index: number) => void;
	}>();
</script>

<div class="flex gap-[2rem] lg:gap-[2rem] xl:gap-[5rem]">
	{#each slides, index}
		<button
			class="h-[0.5rem] w-[0.5rem] rounded-full transition-colors duration-300 focus:outline-none"
			class:bg-[#e3ddd6]={currentIndex === index}
			class:bg-[#6b6d73]={currentIndex !== index}
			role="tab"
			aria-selected={currentIndex === index}
			aria-label={`Go to slide ${index + 1}`}
			onclick={() => setSlide(index)}
		></button>
	{/each}
</div>
