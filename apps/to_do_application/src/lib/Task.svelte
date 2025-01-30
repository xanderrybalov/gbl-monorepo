<script lang="ts">
let props = $props < {
    task: {
        id: number;
        text: string;
        completed: boolean;
    };
    onToggle: () => void;
} > ();

function toggleState() {
    props.onToggle();
}
</script>

<div
    class="flex justify-between items-center p-input-padding"
    role="listitem"
    aria-label={`Task: ${props.task.text}`}
    >
    <span
        class="{props.task.completed ? 'line-through text-task-completed' : 'text-task-pending'}"
        id={`task-${props.task.id}`}
        >
        {props.task.text}
    </span>

    <button
        class="flex items-center justify-center"
        onclick={toggleState}
        aria-labelledby={`task-${props.task.id}`}
        aria-label={props.task.completed ? 'Mark as pending' : 'Mark as completed'}
        role="switch"
        aria-checked={props.task.completed}
        >
        {#if props.task.completed}
        <img src="/smile.svg" alt="Task completed" class="w-emojis" />
        {:else}
        <img src="/meh.svg" alt="Task pending" class="w-emojis" />
        {/if}
    </button>
</div>
