<script lang="ts">
	import { Dots, SlideInfo, Social, TextOverlay } from './index.js';

	export let season: string;
	export let title: string;
	export let year: number;
	export let currentIndex: number;
	export let slides: any;
	export let setSlide: (index: number) => void;
</script>

<SlideInfo {season} {title} {year} />

<TextOverlay {season} {title} />

<div
	class="absolute left-0 top-[51rem] flex w-full items-center justify-between p-secondary-padding text-white"
	role="contentinfo"
>
	<Social />
	<Dots {currentIndex} {slides} {setSlide} />
</div>
