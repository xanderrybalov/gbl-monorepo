<script lang="ts">
  export let classes: string = '';
</script>

<div
  class={`flex items-center justify-center min-h-screen ${classes}`}
  style="background: linear-gradient(175deg, rgba(141,178,254,1) 0%, rgba(221,196,253,1) 50%, rgba(241,243,255,1) 100%); background-repeat: no-repeat; background-size: cover;"  
>
  <slot />
</div>
