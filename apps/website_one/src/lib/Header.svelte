<script lang="ts">
	import { onMount } from 'svelte';

	let currentLanguage = $state('ENG');
	let isMenuOpen = $state(false);

	let { initialLanguage = 'ENG', onLanguageChange = () => {} } = $props<{
		initialLanguage?: 'ENG' | 'FR';
		onLanguageChange?: (lang: 'ENG' | 'FR') => void;
	}>();

	currentLanguage = initialLanguage;

	function switchLanguage(lang: 'ENG' | 'FR') {
		currentLanguage = lang;
		onLanguageChange(lang);
	}

	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}

	function openMenu() {
		isMenuOpen = true;
		document.body.classList.add('overflow-hidden');
	}

	function closeMenu() {
		isMenuOpen = false;
		document.body.classList.remove('overflow-hidden');
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div
	class="p-primary-padding fixed left-0 top-0 z-50 flex w-full items-center justify-between transition-colors duration-300"
	class:bg-menu-bg={scrolled}
>
	<button
		class="flex items-center gap-2 transition-colors duration-300"
		class:text-text-black={scrolled}
		class:text-text-white={!scrolled}
		onclick={openMenu}
		aria-label="Open menu"
	>
		<img
			src="/menu.svg"
			alt=""
			class="w-menu-icon-width h-menu-icon-height invert filter transition-all duration-300"
			class:invert-0={scrolled}
			class:invert={!scrolled}
			aria-hidden="true"
		/>
		<span class="pl-menu-text-padding">Menu</span>
	</button>

	<div class="gap-menu-gap flex">
		<button
			class="text-lg font-bold transition-colors duration-300 md:text-sm"
			class:text-text-black={currentLanguage === 'ENG'}
			class:text-secondary={currentLanguage !== 'ENG'}
			onclick={() => switchLanguage('ENG')}
			aria-label="Switch to English"
			aria-pressed={currentLanguage === 'ENG'}
		>
			ENG
		</button>
		<button
			class="text-lg font-bold transition-colors duration-300 md:text-sm"
			class:text-text-black={currentLanguage === 'FR'}
			class:text-secondary={currentLanguage !== 'FR'}
			onclick={() => switchLanguage('FR')}
			aria-label="Switch to French"
			aria-pressed={currentLanguage === 'FR'}
		>
			FR
		</button>
	</div>
</div>

{#if isMenuOpen}
	<div
		class="bg-primary menu-overlay-opacity fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500"
	>
		<button
			class="top-menu-close-top right-menu-close-right text-menu-button-text absolute font-bold text-black transition-opacity hover:opacity-70"
			onclick={closeMenu}
			aria-label="Close menu"
		>
			✕
		</button>

		<nav
			class="gap-menu-nav-gap text-menu-link-text flex flex-col items-center font-bold text-black"
		>
			<button class="transition-opacity hover:opacity-70" onclick={() => console.log('FB Clicked')}
				>FB</button
			>
			<button class="transition-opacity hover:opacity-70" onclick={() => console.log('PIN Clicked')}
				>PIN</button
			>
			<button class="transition-opacity hover:opacity-70" onclick={() => console.log('IG Clicked')}
				>IG</button
			>
		</nav>
	</div>
{/if}
