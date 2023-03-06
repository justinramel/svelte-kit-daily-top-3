<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>


<div>
  <h1>Top 3</h1>

  <ol>
    {#each data.todos as todo}
      <li>
        {todo.title}
      </li>
      {/each}
  </ol>
</div>
