<script lang="ts">
	let today = new Date();

	let monthName = $state(today.toLocaleString('en-US', { month: 'long' }));
	let dayName = $state(today.toLocaleString('en-US', { weekday: 'long' }));
	let day = $state(today.getDate());
</script>

<header
	class="border-b-header-line border-header-line-primary p-container-padding text-center"
	aria-labelledby="current-date"
>
	<h1 id="current-date" class="text-header-title font-bold text-task-pending" aria-live="polite">
		{monthName}
	</h1>
	<p class="pt-task-gap text-sm font-header-semibold text-secondary-violett" aria-live="polite">
		{dayName}, {monthName}
		{day}
	</p>
</header>
