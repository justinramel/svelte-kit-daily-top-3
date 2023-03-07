<script lang="ts">
  import type { PageData } from "./$types";
  import Todos from "../components/Todos.svelte";
  import NewTop3 from "../components/NewTop3.svelte";

  export let data: PageData;
</script>


<div>
  <h1>Top 3</h1>

  {#if data.todos.length > 0}
    <Todos todos={data.todos} />
  {:else}
    <NewTop3 />
  {/if}
</div>
