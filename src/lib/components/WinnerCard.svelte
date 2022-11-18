<script>
    import NarratorCard from "./NarratorCard.svelte";
    import PlayerCard from "./PlayerCard.svelte";

    export let nums, title, desc, narrname, narrpic, playart, bgseason, narrdesc, playname, playpic, playdesc;
</script>

<main class="p-5 flex justify-center items-center">
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
        {#if playart}
        <div class="h-48 lg:h-auto border-l border-b rounded-t lg:border-t border-gray-400 lg:w-[150px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center" style="background-image: url({playart})" title="Arte do vencedor">
        </div>
        {/if}
        <div class="border-r border-b border-gray-400 lg:border-l-0 lg:border-r-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
              
              Season {nums}
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p class="text-gray-700 text-base">{desc}</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
                <PlayerCard pic={playpic} name={playname} desc={playdesc}/>
            </div>
            <div>
                <NarratorCard pic={narrpic} name={narrname} desc={narrdesc}/>
            </div>
          </div>          
        </div>
        {#if bgseason}
        <div class="h-48 lg:h-auto border-r border-b rounded-t lg:border-l-0 lg:border-t border-gray-400 lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-r text-center" style="background-image: url({bgseason})" title="Tema da season">
        </div>
        {/if}
    </div>

</main>

<style>
</style>