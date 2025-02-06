<script lang="ts">
	let { task, onToggle } = $props<{
		task: {
			id: number;
			text: string;
			completed: boolean;
		};
		onToggle: () => void;
	}>();

	function toggleState() {
		onToggle();
	}
</script>

<div
	class="flex items-center justify-between p-input-padding"
	role="listitem"
	aria-label={`Task: ${task.text}`}
>
	<span
		class="{task.completed ? 'text-task-completed line-through' : 'text-task-pending'}
	       min-w-0 max-w-[240px] overflow-visible whitespace-normal break-words
	       break-all text-left leading-relaxed sm:max-w-full"
		id={`task-${task.id}`}
	>
		{task.text}
	</span>

	<button
		class="w-emoji-size h-emoji-size ml-4 flex flex-none items-center justify-center"
		onclick={toggleState}
		aria-labelledby={`task-${task.id}`}
		aria-label={task.completed ? 'Mark as pending' : 'Mark as completed'}
		role="switch"
		aria-checked={task.completed}
	>
		{#if task.completed}
			<img src="/smile.svg" alt="Task completed" class="h-full w-full" />
		{:else}
			<img src="/meh.svg" alt="Task pending" class="h-full w-full" />
		{/if}
	</button>
</div>
