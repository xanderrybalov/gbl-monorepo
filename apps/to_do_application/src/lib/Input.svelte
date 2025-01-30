<script lang="ts">
export let value: string = '';
export let placeholder: string = 'Add Task';
</script>

<div class="my-input-margin-y w-full px-input-padding-x">
    <input
        type="text"
        bind:value={value}
        placeholder={placeholder}
        class="w-full p-input-padding border border-input-border focus:outline-none focus:input-ring focus:ring-secondary-violett"
        aria-label="New task input"
        />
</div>
