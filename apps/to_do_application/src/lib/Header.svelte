<script lang="ts">
const today: Date = new Date();

const monthName: string = today.toLocaleString('en-US', {
    month: 'long'
});
const dayName: string = today.toLocaleString('en-US', {
    weekday: 'long'
});
const day: number = today.getDate();
</script>

<header class="text-center p-container-padding border-b-header-line border-header-line-primary" aria-labelledby="current-date">
    <h1 id="current-date" class="text-header-title font-bold text-task-pending" aria-live="polite">
        {monthName}
    </h1>
    <p class="text-sm text-secondary-violett font-header-semibold pt-task-gap" aria-live="polite">
        {dayName}, {monthName} {day}
    </p>
</header>
