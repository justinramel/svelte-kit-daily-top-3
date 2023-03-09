<script lang="ts">
  import type { PageData } from "./$types";
  import Todos from "../components/Todos.svelte";
  import NewTop3 from "../components/NewTop3.svelte";

  export let data: PageData;
</script>


<div class="mx-auto max-w-2xl text-center p-16">
  <h1 class="text-4xl font-bold text-gray-900">Top 3</h1>

  <div class="mt-8">
    {#if data.todos.length > 0}
      <Todos todos={data.todos} />
    {:else}
      <NewTop3 />
    {/if}
  </div>
</div>
