<script>
    import Hero from "$lib/components/Hero.svelte";

    import CardFrame from "../components/CardFrame.svelte";

    export let cardId, func;
</script>

<div class="shadow-black card-second bg-stone-500 grid">
    <div class="relative z-[1]"><CardFrame /></div>
    <div class="absolute z-[0]"><Hero /></div>
</div>

<style>
</style>
