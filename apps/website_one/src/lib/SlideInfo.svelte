<script lang="ts">
  export let season: string;
  export let title: string;
  export let year: number;
</script>

<div class="absolute top-season-position-top left-season-position-left font-bold text-white season-text-sm md:season-text-md">
  {season}<br />
  {title}<br />
  {year}
</div>
