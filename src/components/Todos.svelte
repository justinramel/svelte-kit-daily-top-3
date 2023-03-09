
<script>
  import Todo from "./Todo.svelte";

  export let todos = [];
</script>

<div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
  <div class="shadow sm:overflow-hidden sm:rounded-md">
    <div class="bg-white py-6 px-4 sm:p-6">
      <fieldset class="space-y-5 flex flex-col gap-4">
        {#each todos as todo, index}
          <Todo {todo} index={index + 1} />
        {/each}
      </fieldset>
    </div>
  </div>
</div>