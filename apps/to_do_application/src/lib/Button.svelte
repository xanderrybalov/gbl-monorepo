<script lang="ts">
	let { label, classes, onClick, ariaLabel, type } = $props<{
		label: string;
		classes?: string;
		onClick?: () => void;
		ariaLabel?: string;
		type?: 'button' | 'submit' | 'reset';
	}>();

	label = label ?? 'Add';
	type = type ?? 'button';
</script>

<button
	class={`rounded-button bg-primary-green px-button-padding-x py-button-padding-y text-button-text text-white ${classes ?? ''}`}
	{type}
	aria-label={ariaLabel || label}
	onclick={onClick}
>
	{label}
</button>
