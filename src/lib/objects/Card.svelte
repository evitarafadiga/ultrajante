<script>
    import Hero from "$lib/components/Hero.svelte";

    import CardFrame from "../components/CardFrame.svelte";

    export let cardId, func;
</script>

<button
    on:click={func}
    class="flex hover:translate-y-[-20px] relative transition ease-out shadow-black rounded-md w-[500px] h-[300px] bg-stone-900 grid"
>
    <div class="relative z-[2]"><CardFrame /></div>
    <div class="absolute z-[1]"><Hero /></div>
</button>

<style>
</style>
