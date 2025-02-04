<script lang="ts">
	let { logoSrc, logoAlt, caption } = $props<{
		logoSrc: string;
		logoAlt: string;
		caption: string;
	}>();
</script>

<div class="flex flex-col items-center justify-center">
	<div
		class="custom-pulse flex h-logo-size w-logo-size flex-col items-center justify-center rounded-logo bg-logo-bg shadow-logo"
	>
		<img
			src={logoSrc}
			alt={logoAlt}
			class="filter-logo h-logo-image-size w-logo-image-size pl-logo-padding-left"
		/>
		<p class="pt-logo-caption-padding-top font-logo text-logo-caption">{caption}</p>
	</div>
</div>

<style>
	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	.custom-pulse {
		animation: pulse 2s infinite;
	}

	.filter-logo {
		filter: invert(0.3) sepia(0.5) saturate(0.3) hue-rotate(0deg) brightness(0.8);
	}
</style>
