<script lang="ts">
	let { season, title } = $props();
</script>

<div
	class="leading-title-line-height top-title-position-top left-title-position-left tracking-title-letter-spacing absolute text-left
  font-[Garamond,serif] text-white"
>
	<span class="text-title-text-base lg:text-season-text-lg xl:text-title-text-xl block font-light">
		{season}
	</span>

	<span class="text-title-text-base lg:text-title-text-lg xl:text-title-text-xl block font-light">
		{title}
	</span>
</div>
