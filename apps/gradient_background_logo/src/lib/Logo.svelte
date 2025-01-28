<script lang="ts">
export let logoSrc: string = '/bing-logo.svg';
export let logoAlt: string = 'Logo';
export let caption: string = 'Bing';
</script>

<div class="flex flex-col items-center justify-center">
    <div class="w-logo-size h-logo-size bg-logo-bg rounded-logo shadow-logo flex flex-col items-center justify-center custom-pulse">
        <img
            src={logoSrc}
            alt={logoAlt}
            class="pl-logo-padding-left w-logo-image-size h-logo-image-size filter-logo"
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
