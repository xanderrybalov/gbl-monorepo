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
	class="absolute right-navigation-right top-navigation-top z-10 flex -translate-y-1/2 transform items-center"
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
