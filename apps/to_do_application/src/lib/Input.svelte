<script lang="ts">
	let { value = $bindable(''), placeholder = 'Add Task' } = $props<{
		value: string;
		placeholder?: string;
	}>();
</script>

<div class="my-input-margin-y w-full px-input-padding-x">
	<input
		type="text"
		bind:value
		{placeholder}
		class="focus:input-ring w-full border border-input-border p-input-padding placeholder-secondary-violett focus:outline-none focus:ring-secondary-violett"
		aria-label="New task input"
	/>
</div>
