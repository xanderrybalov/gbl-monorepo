<script lang="ts">
	export let value: string = '';
	export let placeholder: string = 'Add Task';

	function enforceMaxLength(event: Event) {
		let input = (event.target as HTMLInputElement).value;
		if (input.length > 60) {
			value = input.slice(0, 60);
		}
	}
</script>

<div class="my-input-margin-y w-full px-input-padding-x">
	<input
		type="text"
		bind:value
		maxlength="60"
		oninput={enforceMaxLength}
		{placeholder}
		class="w-full border border-input-border p-input-padding placeholder-secondary-violett
			   focus:outline-none focus:ring-2 focus:ring-secondary-violett"
		aria-label="New task input"
	/>
</div>
