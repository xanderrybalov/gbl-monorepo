<script lang="ts">
	let { onPrevious, onNext, currentSlide, totalSlides } = $props<{
		onPrevious: () => void;
		onNext: () => void;
		currentSlide: number;
		totalSlides: number;
	}>();

	// Определяем метки для кнопок навигации
	let previousLabel = $derived(`Перейти к предыдущему слайду (${currentSlide} из ${totalSlides})`);
	let nextLabel = $derived(`Перейти к следующему слайду (${currentSlide} из ${totalSlides})`);
</script>

<!-- Контейнер для кнопок навигации -->
<div
	class="absolute right-[2.8rem] top-[22.2rem] z-10 flex -translate-y-1/2 transform items-center"
>
	<button
		class="text-base text-white transition-opacity hover:opacity-80"
		onclick={onNext}
		aria-label={nextLabel}
	>
		Next
	</button>

	<div class="mx-4 h-[2px] w-[85px] bg-white"></div>

	<button
		class="text-base text-white transition-opacity hover:opacity-80"
		onclick={onPrevious}
		aria-label={previousLabel}
	>
		Previous
	</button>
</div>
