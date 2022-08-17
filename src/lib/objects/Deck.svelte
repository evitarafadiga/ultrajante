<script>
    import Card from "./Card.svelte";
    import CardVerse from "./CardVerse.svelte";

    let src = '';
    
    export let villainDeck;
    export let userDeck;

   let villain = villainDeck;
   let goodguy = userDeck;

    export let func, isActive, movefunc;
</script>
<div class="justify-center h-[420px] w-[700px]">
    <div class="pl-[24px] pt-[12px] card-second flex justify-start">
        {#each villain as villain}
        <CardVerse cardId={villain.name + '.png'} func={func} cardname={'Cebollurl'}/>
        {/each}
    </div>
    <div class="pl-[280px] pt-[100px]">
    <slot />
    </div>
    <div class="pl-[40px] pt-[69px]">
        {#each userDeck as goodguy}
        <Card cardId={goodguy.name + '.png'} func={func} isActive={isActive} movefunc={movefunc} cardname={'Rasputin'}/>
        {/each}
    </div>
</div>


<style>
    
</style>