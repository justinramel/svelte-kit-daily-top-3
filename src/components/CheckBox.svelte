<script lang="ts">
  export let label = "";
  export let complete = false;
</script>

<div>
    {#if complete} <img src="/CheckIcon.svg" alt="" /> {:else}<span>{label}</span> {/if}
</div>
