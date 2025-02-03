<script lang="ts">
	import { Dots, SlideInfo, Social, TextOverlay } from './index.js';

	let { season, title, year, currentIndex, slides, setSlide } = $props<{
		season: string;
		title: string;
		year: number;
		currentIndex: number;
		slides: any;
		setSlide: (index: number) => void;
	}>();
</script>

<SlideInfo {season} {title} {year} />

<TextOverlay {season} {title} />

<div
	class="absolute left-0 top-content-info-top flex w-full items-center justify-between p-secondary-padding text-white"
	role="contentinfo"
>
	<Social />
	<Dots {currentIndex} {slides} {setSlide} />
</div>
