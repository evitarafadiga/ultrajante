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
<div class="">
    <div class="pl-[24px] card-second bg-stone-200 flex justify-start">
        {#each villain as villain}
        <CardVerse cardId={villain.name + '.png'} func={func}/>
        {/each}
    </div>

    <div class="pl-[270px] pt-[179px] h-[220px] w-[660px] bg-stone-200">
        {#each userDeck as goodguy}
        <Card cardId={goodguy.name + '.png'} func={func} isActive={isActive} movefunc={movefunc}/>
        {/each}
    </div>
</div>


<style>
    
</style>