<script lang="ts">
  import type { Todo } from "@prisma/client";
  import CheckBox from "./CheckBox.svelte";

  export let todo: Todo;
  export let index: number;

  let form;
</script>

<div class="todo">
<!--  <label for={`todo-${todo.id}`}>-->
<!--    <CheckBox label={index.toString()} complete={todo.complete} />-->
<!--  </label>-->



  <form method="POST" action="?/update" bind:this={form}>
    <input name="id" type="hidden" bind:value={todo.id} />
    <input id={`todo-${todo.id}`} name="todo" type="checkbox" bind:checked={todo.complete} on:change={() => form.requestSubmit()} />
  </form>

  <label for={`todo-${todo.id}`}>
    {todo.title}
  </label>
</div>

<style>
  .todo {
      display: flex;
  }
</style>

