<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { ShopNowButton } from './index.js';
	export let thumbnails: string[];
	export let mainImage: string;
	export let currentIndex: number;
	export let handleThumbnailLoad: (index: number) => void;
	export let thumbnailsLoaded: boolean[];
	export let slides: any;
</script>

<div class="flex min-h-[900px] flex-col items-end justify-start overflow-hidden bg-primary">
	<!-- Первая миниатюра -->
	<div
		class="mr-[8.5rem] mt-[14.5rem] h-[330px] min-h-[330px] w-[245px] min-w-[245px] self-end overflow-hidden"
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
				in:fly={{ x: 60, duration: 600, opacity: 1, easing: cubicOut }}
				out:fly={{ x: -60, duration: 600, opacity: 0, easing: cubicOut }}
			/>
		{/key}
	</div>

	<!-- Текстовый блок с линией -->
	<div class="mr-[-8.5rem] mt-[-6rem] flex rotate-90 items-center gap-[3rem]">
		<span class="origin-bottom whitespace-nowrap text-sm text-black" aria-label="Reference">
			Ref. {slides[currentIndex].ref}
		</span>
		<div class="h-[2px] w-[7rem] bg-black"></div>
		<span class="origin-top whitespace-nowrap text-sm text-black" aria-label="Description">
			{slides[currentIndex].description}
		</span>
	</div>

	<!-- Вторая миниатюра и кнопка SHOP NOW -->
	<div class="mr-[4rem] mt-[6.5rem] flex w-[85%] items-end justify-end gap-[3rem]">
		<!-- Вторая миниатюра -->
		<div class="h-[275px] min-h-[275px] w-[205px] min-w-[205px] flex-none self-end overflow-hidden">
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
					in:fly={{ x: 60, duration: 600, opacity: 1, easing: cubicOut }}
					out:fly={{ x: -60, duration: 600, opacity: 0, easing: cubicOut }}
				/>
			{/key}
		</div>

		<!-- Кнопка SHOP NOW -->
		<ShopNowButton />
	</div>
</div>
