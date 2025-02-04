<script lang="ts">
	let { season, title } = $props();
</script>

<h1
	id="collection-title"
	class="absolute left-title-position-left top-title-position-top text-left font-[Garamond,serif] leading-title-line-height tracking-title-letter-spacing text-white"
	aria-labelledby="season-title"
>
	<span
		id="season-title"
		class="text-[2rem]font-light block sm:text-[4rem] md:text-[5rem] lg:text-season-text-lg xl:text-title-text-xl"
	>
		{season}
	</span>

	<!-- <span
		id="title-name"
		class="block text-title-text-base font-light lg:text-title-text-lg xl:text-title-text-xl"
	>
		{title}
	</span> -->
</h1>

<span id="collection-description" class="sr-only">
	{season} Collection - {title}
</span>
