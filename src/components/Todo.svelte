<script lang="ts">
  import type { Todo } from "@prisma/client";
  import CheckBox from "./CheckBox.svelte";

  export let todo: Todo;
  export let index: number;

  let form;
</script>

<div class="relative flex">
  <div class="flex items-center gap-2">
    <label for={`todo-${todo.id}`}>
      <CheckBox label={index.toString()} complete={todo.complete} />
    </label>

    <div class="ml-3 text-lg flex items-center">
      <form method="POST" action="?/update" bind:this={form}>
        <input name="id" type="hidden" bind:value={todo.id} />
        <input id={`todo-${todo.id}`} name="todo" type="checkbox" bind:checked={todo.complete}
               on:change={() => form.requestSubmit()} class="hidden" />
      </form>

      <label for={`todo-${todo.id}`} class:line-through="{todo.complete}">
        {todo.title}
      </label>
    </div>
  </div>
</div>

