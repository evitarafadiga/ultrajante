<script>
    import NarratorCard from "./NarratorCard.svelte";
    import PlayerCard from "./PlayerCard.svelte";

    export let nums, title, desc, narrname, narrpic, playart, bgseason, narrdesc, playname, playpic, playdesc;
</script>

<main class="p-6 flex justify-center items-center">
    <div class="border bg-white rounded-b border-b border-gray-400 rounded-t-md lg:border-l-0 lg:max-w-full lg:flex">
        {#if playart}
        <div class="rounded-l-md h-48 lg:h-auto lg:w-[150px] flex-none bg-cover text-center" style="background-image: url({playart})" title="Arte do vencedor">
        </div>
        {/if}
        <div class="rounded-t-md bg-white p-4 flex flex-col justify-between leading-normal">
          <div class="mb-90">
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
        <div class="h-48 lg:h-auto lg:w-80 flex-none bg-cover lg:rounded-t-none lg:rounded-r text-center" style="background-image: url({bgseason})" title="Tema da season">
        </div>
        {/if}
    </div>

</main>

<style>
</style>