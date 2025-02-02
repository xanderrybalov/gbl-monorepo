<script lang="ts">
	import { CollectionSlider, Header } from '$lib/index.js';
	import { collections } from '$lib/types/types.js';


	let currentIndex = 0;

	function handleLanguageChange(newLanguage: 'ENG' | 'FR') {
		console.log(`Language changed to ${newLanguage}`);
	}
</script>

<div class="flex min-h-screen flex-col">
	<!-- Header -->
	<Header initialLanguage="ENG" onLanguageChange={handleLanguageChange} />

	<!-- Main content -->
	<main class="flex-grow">
		<CollectionSlider slides={collections} {currentIndex} />
	</main>
</div>
