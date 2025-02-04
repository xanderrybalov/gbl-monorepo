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
		maxlength="20"
		class="w-full border border-input-border p-input-padding placeholder-secondary-violett
		       focus:outline-none focus:ring-2 focus:ring-secondary-violett"
		aria-label="New task input"
	/>
</div>
