<script lang="ts">
	let { season, title } = $props();
</script>

<h1
	id="collection-title"
	class="text-left font-[Garamond,serif] leading-title-line-height tracking-title-letter-spacing text-white"
	aria-labelledby="season-title"
>
	<span
		id="season-title"
		class="block text-[5rem] font-light sm:text-[4rem] md:text-title-text-xl lg:text-season-text-lg xl:text-title-text-xl"
	>
		{season}
	</span>

	<span
		id="title-name"
		class="block text-[5rem] font-light sm:text-[4rem] md:text-title-text-xl lg:text-season-text-lg xl:text-title-text-xl"
	>
		{title}
	</span>
</h1>

<span id="collection-description" class="sr-only">
	{season} Collection - {title}
</span>
