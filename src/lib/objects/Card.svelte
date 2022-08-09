<script>
import CardButtons from "$lib/components/CardButtons.svelte";

    import Hero from "$lib/components/Hero.svelte";

    import CardFrame from "../components/CardFrame.svelte";

    export let cardId, func, isActive, movefunc;
    
</script>

<button
    on:click={func}
    class="flex hover:translate-y-[-20px] relative transition ease-out shadow-black rounded-md card-size bg-stone-900 grid"
>
   {#if isActive}
   <div class="absolute z-[3] translate-y-[90px] translate-x-[60px]"><CardButtons movefunc={movefunc} /></div>
   {/if}
    <div class="relative z-[2]"><CardFrame /></div>
    <div class="absolute z-[1]"><Hero cardId={cardId} /></div>
</button>

<style>
</style>
