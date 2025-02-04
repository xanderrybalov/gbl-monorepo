<script lang="ts">
	import { browser } from '$app/environment';
	import {
		Dots,
		Navigation,
		SlideInfo,
		Social,
		TextOverlay,
		type CollectionSlide
	} from './index.js';
	import MainImage from './MainImage.svelte';
	import Thumbnails from './Thumbnails.svelte';

	const { slides = [] } = $props<{
		slides: CollectionSlide[];
		currentIndex: number;
	}>();

	let currentIndex = $state(0);
	let mainImageLoaded = $state(false);
	let thumbnailsLoaded: boolean[] = $state(Array(slides.length).fill(false));
	let sliderId = crypto.randomUUID();

	// Reset thumbnail loading when changing slide
	$effect(() => {
		if (browser && slides[currentIndex]) {
			thumbnailsLoaded = Array(slides.length).fill(false);
		}
	});

	// Preload the next image
	$effect(() => {
		if (browser && slides[currentIndex]) {
			const nextIndex = (currentIndex + 1) % slides.length;
			slides[nextIndex]?.mainImage && (new Image().src = slides[nextIndex].mainImage);
		}
	});

	function handleMainImageLoad() {
		mainImageLoaded = true;
	}

	function handleThumbnailLoad(index: number) {
		thumbnailsLoaded[index] = true;
	}

	function nextSlide() {
		mainImageLoaded = false;
		currentIndex = (currentIndex + 1) % slides.length;
	}

	function prevSlide() {
		mainImageLoaded = false;
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	}
</script>

<div
	class="grid max-h-screen min-h-screen bg-primary md:grid-cols-[auto] lg:grid-cols-[auto_600px]"
	id={sliderId}
>
	<div
		class="relative h-screen min-h-[900px] bg-primary md:min-h-[1000px] lg:min-h-[900px]"
		id={sliderId}
	>
		{#key slides[currentIndex].id}
			<MainImage
				mainImage={slides[currentIndex].mainImage}
				season={slides[currentIndex].season}
				year={slides[currentIndex].year}
				isLoaded={mainImageLoaded}
				onImageLoad={handleMainImageLoad}
			/>
		{/key}

		<SlideInfo
			season={slides[currentIndex].season}
			title={slides[currentIndex].title}
			year={slides[currentIndex].year}
		/>

		<Navigation
			onPrevious={prevSlide}
			onNext={nextSlide}
			currentSlide={currentIndex}
			totalSlides={slides.length}
		/>

		<TextOverlay season="Summer" title="2020" />

		<nav
			class="absolute left-0 top-content-info-top flex w-full items-center justify-between p-secondary-padding text-white"
			aria-label="Slide navigation"
			aria-live="polite"
		>
			<Social />
			<Dots {currentIndex} {slides} setSlide={(index: number) => (currentIndex = index)} />
		</nav>
	</div>

	<Thumbnails
		thumbnails={slides[currentIndex].thumbnails}
		mainImage={slides[currentIndex].mainImage}
		{currentIndex}
		{handleThumbnailLoad}
		{thumbnailsLoaded}
		{slides}
	/>
</div>
