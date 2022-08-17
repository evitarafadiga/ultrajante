<script>
    import Hero from "$lib/components/Hero.svelte";

    import CardFrame from "../components/CardFrame.svelte";

    export let cardId;
    export let func, cardname;
</script>

<div class="shadow-black card-second grid pl-[64px] pr-[64px]">
    <div class="absolute z-[2] pt-[174px] pl-[31px] font-semibold text-white italic text-white text-sm">
        {cardname}
    </div>
    <div class="relative z-[1]"><CardFrame /></div>
    <div class="absolute z-[0]"><Hero cardId={cardId} /></div>
</div>

<style>
</style>
