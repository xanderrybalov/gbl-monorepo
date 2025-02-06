<script lang="ts">
	import { Header } from '$lib/index.js';
	import Main from '$lib/Main.svelte';
	import { collections } from '$lib/types/types.js';

	let currentIndex = 0;
</script>

<div class="flex min-h-screen flex-col">
	<!-- Main content -->
	<main class="flex-grow">
		<Main slides={collections} {currentIndex} />
	</main>
</div>
