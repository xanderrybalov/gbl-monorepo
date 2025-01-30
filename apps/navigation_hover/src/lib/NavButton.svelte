<script lang="ts">
	export let link: string;
	export let isActive: boolean = false;
	export let onActivate: (link: string) => void;
</script>

<button
	class="relative cursor-pointer transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none"
	tabindex="0"
	aria-current={isActive ? 'page' : undefined}
	aria-label={`Go to ${link} section`}
	on:click={() => onActivate?.(link)}
>
	<span class={isActive ? 'text-primary' : ''}>{link}</span>
	<div
		class="absolute left-5 right-5 top-11 h-0.5 rounded-md bg-white transition-all duration-300 ease-in-out"
		style="transform: scaleX({isActive ? 1 : 0})"
	></div>
</button>
