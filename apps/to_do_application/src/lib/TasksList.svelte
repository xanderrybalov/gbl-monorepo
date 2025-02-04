<script lang="ts">
	import Button from './Button.svelte';
	import Task from './Task.svelte';
	import Input from './Input.svelte';

	let tasks = $state([
		{ id: 1, text: 'Buy new sweatshirt', completed: true },
		{ id: 2, text: 'Read an article', completed: true },
		{ id: 3, text: 'Write blog post', completed: false },
		{ id: 4, text: 'Watch Mr Robot', completed: false },
		{ id: 5, text: 'Run', completed: false }
	]);

	let newTaskText = $state('');

	function addTask() {
		if (newTaskText.trim() && newTaskText.length <= 20) {
			tasks = [...tasks, { id: Date.now(), text: newTaskText, completed: false }];
			newTaskText = '';
		}
	}

	function toggleTask(id: number) {
		tasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
	}
</script>

<div class="relative flex justify-center p-container-padding">
	<div class="flex w-full flex-col justify-center">
		<div class="w-full">
			{#each tasks as task (task.id)}
				<Task {task} onToggle={() => toggleTask(task.id)} />
			{/each}
		</div>

		<Input bind:value={newTaskText} placeholder="Add Task" />

		{#if newTaskText.length > 19}
			<p class="mt-2 text-sm text-green-500">⚠️ You cannot enter more than 20 characters.</p>
		{/if}
	</div>

	<Button
		label="Add"
		ariaLabel="Add a new task"
		classes="absolute bottom-negative-button shadow-button-transform transition-transform duration-200 transform"
		onClick={addTask}
	/>
</div>
