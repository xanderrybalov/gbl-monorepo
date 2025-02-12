<script lang="ts">
	import { browser } from '$app/environment';
	import {
		Dots,
		Header,
		Navigation,
		ShopNowButton,
		SlideInfo,
		Social,
		TextOverlay,
		type CollectionSlide
	} from './index.js';
	import MainImage from './MainImage.svelte';
	import Thumbnails from './Thumbnails.svelte';
	import { onMount } from 'svelte';

	const { slides = [] } = $props<{
		slides: CollectionSlide[];
		currentIndex: number;
	}>();

	let currentIndex = $state(0);
	let mainImageLoaded = $state(false);
	let thumbnailsLoaded: boolean[] = $state(Array(slides.length).fill(false));
	let sliderId = crypto.randomUUID();
	let showElement = $state(true);

	onMount(() => {
		showElement = window.innerWidth >= 1024;

		window.addEventListener('resize', () => {
			showElement = window.innerWidth >= 1024;
		});
	});

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

	function handleLanguageChange(newLanguage: 'ENG' | 'FR') {
		console.log(`Language changed to ${newLanguage}`);
	}
</script>

<div
	class="grid max-h-screen min-h-screen bg-primary"
	class:lg:grid-cols-[auto_600px]={showElement}
	class:lg:grid-cols-[auto]={!showElement}
	id={sliderId}
>
	<Header initialLanguage="ENG" onLanguageChange={handleLanguageChange} />

	<div class="relative min-h-screen bg-primary lg:min-h-[100vh]">
		{#key slides[currentIndex].id}
			<MainImage
				mainImage={slides[currentIndex].mainImage}
				season={slides[currentIndex].season}
				year={slides[currentIndex].year}
				isLoaded={mainImageLoaded}
				onImageLoad={handleMainImageLoad}
			/>
		{/key}

		<div
			class="p-nav-padding lg:p-main-padding-max absolute bottom-1/4 left-0 flex w-full flex-col md:bottom-[10rem]"
		>
			<div class="mb-[2rem] flex flex-col justify-between sm:flex-row lg:mb-[6rem]">
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
			</div>
			<div class="flex flex-col justify-between">
				<TextOverlay season="Summer" title="2020" />
				{#if !showElement}
					<div class="mt-20 flex justify-start">
						<ShopNowButton />
					</div>
				{/if}
			</div>
		</div>

		<nav
			class="lg:p-main-padding-nav-max p-main-padding absolute bottom-0 flex w-full items-center justify-between text-white"
			aria-label="Slide navigation"
			aria-live="polite"
		>
			<Social />
			<Dots {currentIndex} {slides} setSlide={(index: number) => (currentIndex = index)} />
		</nav>
	</div>

	{#if showElement}
		<Thumbnails
			thumbnails={slides[currentIndex].thumbnails}
			mainImage={slides[currentIndex].mainImage}
			{currentIndex}
			{handleThumbnailLoad}
			{thumbnailsLoaded}
			{slides}
		/>
	{/if}
</div>
