<script>
    export let pic, name, desc;
</script>

<div class="flex items-center">
    <img class="w-10 h-10 rounded-full mr-4" src={pic} alt="Avatar do Jogador">
    <div class="text-sm">
      <p class="text-gray-900 leading-none">{name}</p>
      <p class="text-gray-600">{desc}</p>
    </div>
  </div>