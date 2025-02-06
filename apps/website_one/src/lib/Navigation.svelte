<script lang="ts">
	let { onPrevious, onNext, currentSlide, totalSlides } = $props<{
		onPrevious: () => void;
		onNext: () => void;
		currentSlide: number;
		totalSlides: number;
	}>();

	let previousLabel = $derived(`Go to previous slide (${currentSlide} of ${totalSlides})`);
	let nextLabel = $derived(`Go to next slide (${currentSlide} of ${totalSlides})`);
</script>

<nav
	class="flex items-center space-x-4 pt-6 sm:pt-0"
	aria-label="Slide navigation"
	aria-live="polite"
>
	<button
		class="text-base text-white transition-opacity hover:opacity-80"
		onclick={onNext}
		aria-label={nextLabel}
	>
		Next
	</button>

	<div class="mx-divider-margin-x h-divider-height w-divider-width bg-white"></div>

	<button
		class="text-base text-white transition-opacity hover:opacity-80"
		onclick={onPrevious}
		aria-label={previousLabel}
	>
		Previous
	</button>
</nav>
