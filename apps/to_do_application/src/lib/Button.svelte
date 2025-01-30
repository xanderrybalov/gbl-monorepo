<script lang="ts">
    export let label: string = 'Add';
    export let classes: string = ''; 
    export let onClick: (() => void) | undefined; 
    export let ariaLabel: string | undefined = undefined; 
    export let type: 'button' | 'submit' | 'reset' = 'button';
  </script>
  
  <button
  class={`bg-primary-green text-white text-button-text px-button-padding-x py-button-padding-y rounded-button ${classes}`}
  type={type}
  aria-label={ariaLabel || label}
  on:click={onClick}
>
  {label}
</button>
