<script lang="ts">
	let { season, title, year } = $props<{
		season: string;
		title: string;
		year: number;
	}>();
</script>

<p role="heading" aria-level="2" class="text-sm font-bold text-white md:text-xs">
	{season}<br />
	{title}<br />
	{year}
</p>
