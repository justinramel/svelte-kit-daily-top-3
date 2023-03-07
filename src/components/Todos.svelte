
<script>
  import Todo from "./Todo.svelte";

  export let todos = [];
</script>

<ol>
  {#each todos as todo, index}
    <li><Todo {todo} index={index + 1} /></li>
  {/each}
</ol>
