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

<div class="min-h-auto flex flex-col items-end justify-end overflow-hidden bg-primary">
	<!-- First thumbnail -->
	<figure
		class="mb-[3rem] mr-thumbnail-first-margin-right h-thumbnail-first-height w-thumbnail-first-width"
	>
		<!-- Placeholder -->
		<div
			class="inset-0 animate-pulse bg-gray-200"
			class:opacity-0={thumbnailsLoaded[currentIndex]}
			class:hidden={thumbnailsLoaded[currentIndex]}
			aria-hidden="true"
		></div>

		{#key thumbnails[currentIndex]}
			<img
				src={thumbnails?.[0] || mainImage}
				alt={`${slides[currentIndex].season} ${slides[currentIndex].year} Thumbnail Preview`}
				class="h-full w-full object-cover transition-opacity duration-500 ease-in-out"
				class:opacity-0={!thumbnailsLoaded[currentIndex]}
				loading="lazy"
				onload={() => handleThumbnailLoad(currentIndex)}
				in:fly={{ x: 'transition-fly-x', duration: 600, opacity: 1, easing: cubicOut }}
				out:fly={{ x: '-transition-fly-x', duration: 600, opacity: 0, easing: cubicOut }}
			/>
		{/key}

		<figcaption class="sr-only">
			Thumbnail preview of {slides[currentIndex].season}
			{slides[currentIndex].year} collection
		</figcaption>
	</figure>
	<!-- Text block with line -->
	<div
		class="absolute top-1/2 mr-thumbnail-text-margin-right
		       flex rotate-90 items-center gap-thumbnail-text-gap"
	>
		<span class="origin-bottom whitespace-nowrap text-sm text-black" aria-labelledby="ref-label">
			Ref. {slides[currentIndex].ref}
		</span>
		<div class="h-thumbnail-line-height w-thumbnail-line-width bg-black"></div>
		<span id="ref-label" class="sr-only">Reference number</span>

		<span class="origin-top whitespace-nowrap text-sm text-black" aria-labelledby="desc-label">
			{slides[currentIndex].description}
		</span>
		<span id="desc-label" class="sr-only">Product description</span>
	</div>

	<!-- Second thumbnail and SHOP NOW button -->
	<div
		class="pt- mr-thumbnail-second-margin-right flex w-[85%] items-end justify-end gap-thumbnail-text-gap pb-[4rem]"
	>
		<!-- Second thumbnail -->
		<figure
			class="min-h-thumbnail-second-height h-thumbnail-second-height w-thumbnail-second-width min-w-thumbnail-second-width flex-none self-end overflow-hidden"
		>
			<!-- Placeholder -->
			<div
				class="inset-0 animate-pulse bg-gray-200"
				class:opacity-0={thumbnailsLoaded[currentIndex]}
				class:hidden={thumbnailsLoaded[currentIndex]}
				aria-hidden="true"
			></div>

			{#key thumbnails[currentIndex]}
				<img
					src={thumbnails?.[1] || mainImage}
					alt={`${slides[currentIndex].season} ${slides[currentIndex].year} Secondary Thumbnail Preview`}
					class="h-full w-full object-cover transition-opacity duration-300"
					class:opacity-0={!thumbnailsLoaded[currentIndex]}
					loading="lazy"
					onload={() => handleThumbnailLoad(currentIndex)}
					in:fly={{ x: 'transition-fly-x', duration: 600, opacity: 1, easing: cubicOut }}
					out:fly={{ x: '-transition-fly-x', duration: 600, opacity: 0, easing: cubicOut }}
				/>
			{/key}

			<figcaption class="sr-only">
				Secondary thumbnail preview of {slides[currentIndex].season}
				{slides[currentIndex].year} collection
			</figcaption>
		</figure>

		<!-- SHOP NOW -->
		<ShopNowButton />
	</div>
</div>
