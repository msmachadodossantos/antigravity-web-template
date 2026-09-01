<script>
  let count = 0;
</script>

<div class="flex flex-col items-center gap-4">
  <p class="text-lg font-medium text-slate-300">
    Contador: <span class="font-bold text-sky-400">{count}</span>
  </p>
  <button 
    on:click={() => count++}
    class="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold rounded-lg transition-colors cursor-pointer"
  >
    Incrementar
  </button>
</div>