<script>
  import CheckBox from "./CheckBox.svelte";
</script>

<div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
  <div class="shadow sm:overflow-hidden sm:rounded-md">
    <div class="bg-white py-6 px-4 sm:p-6">
      <form method="POST" action="?/create" class="flex flex-col gap-4">
        <div class="flex flex-row gap-4 items-center">
          <label>
            <CheckBox label="1" complete={false} />
          </label>
          <input
            type="text"
            name="todo"
            autoFocus
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div class="flex flex-row gap-4 items-center">
          <label>
            <CheckBox label="2" complete={false} />
          </label>
          <input
            type="text"
            name="todo"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div class="flex flex-row gap-4 items-center">
          <label>
            <CheckBox label="3" complete={false} />
          </label>
          <input
            type="text"
            name="todo"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div class="text-right">
          <button
            type="submit"
            class="inline-flex items-center rounded border border-transparent bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

