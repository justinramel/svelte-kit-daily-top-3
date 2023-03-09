<script lang="ts">
  export let label = "";
  export let complete = false;
</script>

<div class="relative">
    <div class="absolute inset-0 rounded-full bg-blue-400" />
    <div class="relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold">
        <div class="flex items-center justify-center">
            {#if complete} <img src="/CheckIcon.svg" alt="" /> {:else}<span class="text-white">{label}</span> {/if}
        </div>
    </div>
</div>
