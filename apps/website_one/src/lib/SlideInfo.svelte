<script lang="ts">
	export let season: string;
	export let title: string;
	export let year: number;
</script>

<div
	class="top-season-position-top left-season-position-left absolute text-sm font-bold text-white md:text-xs"
>
	{season}<br />
	{title}<br />
	{year}
</div>
