<script lang="ts">
	import { NavButton } from './index.js';

	export let active = 'Branding';
	const links = ['Animation', 'Branding', 'Illustration'];

	const handleActivate = (link: string): void => {
		active = link;
		console.log(`Active link changed to: ${link}`);
	};
</script>

<nav
	aria-label="Main Navigation"
	class="flex w-full items-center justify-center bg-transparent py-md"
>
	<ul class="flex space-x-xxl text-lg font-semibold text-secondary">
		{#each links as link}
			<li class="relative">
				<NavButton {link} isActive={active === link} onActivate={() => handleActivate(link)} />
			</li>
		{/each}
	</ul>
</nav>
