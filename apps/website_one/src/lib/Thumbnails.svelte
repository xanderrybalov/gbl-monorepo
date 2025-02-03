<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import ShopNowButton from './ShopNowButton.svelte';

	let { thumbnails, mainImage, currentIndex, handleThumbnailLoad, thumbnailsLoaded, slides } =
		$props<{
			thumbnails: string[];
			mainImage: string;
			currentIndex: number;
			handleThumbnailLoad: (index: number) => void;
			thumbnailsLoaded: boolean[];
			slides: any;
		}>();
</script>

<div class="flex min-h-[900px] flex-col items-end justify-start overflow-hidden bg-primary">
	<!-- First thumbnail -->
	<div
		class="mr-thumbnail-first-margin-right mt-thumbnail-first-margin-top h-thumbnail-first-height min-h-thumbnail-first-height w-thumbnail-first-width min-w-thumbnail-first-width self-end overflow-hidden"
	>
		<!-- Placeholder -->
		<div
			class="inset-0 animate-pulse bg-gray-200"
			class:opacity-0={thumbnailsLoaded[currentIndex]}
			class:hidden={thumbnailsLoaded[currentIndex]}
		></div>

		{#key thumbnails[currentIndex]}
			<img
				src={thumbnails?.[0] || mainImage}
				alt="Thumbnail view 1"
				class="h-full w-full object-cover transition-opacity duration-500 ease-in-out"
				class:opacity-0={!thumbnailsLoaded[currentIndex]}
				loading="lazy"
				onload={() => handleThumbnailLoad(currentIndex)}
				in:fly={{ x: 'transition-fly-x', duration: 600, opacity: 1, easing: cubicOut }}
				out:fly={{ x: '-transition-fly-x', duration: 600, opacity: 0, easing: cubicOut }}
			/>
		{/key}
	</div>

	<!-- Text block with line -->
	<div
		class="mr-thumbnail-text-margin-right mt-thumbnail-text-margin-top gap-thumbnail-text-gap flex rotate-90 items-center"
	>
		<span class="origin-bottom whitespace-nowrap text-sm text-black" aria-label="Reference">
			Ref. {slides[currentIndex].ref}
		</span>
		<div class="h-thumbnail-line-height w-thumbnail-line-width bg-black"></div>
		<span class="origin-top whitespace-nowrap text-sm text-black" aria-label="Description">
			{slides[currentIndex].description}
		</span>
	</div>

	<!-- Second thumbnail and SHOP NOW button -->
	<div
		class="mr-thumbnail-second-margin-right mt-thumbnail-second-margin-top gap-thumbnail-text-gap flex w-[85%] items-end justify-end"
	>
		<!-- Second thumbnail -->
		<div
			class="h-thumbnail-second-height min-h-thumbnail-second-height w-thumbnail-second-width min-w-thumbnail-second-width flex-none self-end overflow-hidden"
		>
			<!-- Placeholder -->
			<div
				class="inset-0 animate-pulse bg-gray-200"
				class:opacity-0={thumbnailsLoaded[currentIndex]}
				class:hidden={thumbnailsLoaded[currentIndex]}
			></div>

			{#key thumbnails[currentIndex]}
				<img
					src={thumbnails?.[1] || mainImage}
					alt="Thumbnail view 2"
					class="h-full w-full object-cover transition-opacity duration-300"
					class:opacity-0={!thumbnailsLoaded[currentIndex]}
					loading="lazy"
					onload={() => handleThumbnailLoad(currentIndex)}
					in:fly={{ x: 'transition-fly-x', duration: 600, opacity: 1, easing: cubicOut }}
					out:fly={{ x: '-transition-fly-x', duration: 600, opacity: 0, easing: cubicOut }}
				/>
			{/key}
		</div>

		<!-- SHOP NOW -->
		<ShopNowButton />
	</div>
</div>
