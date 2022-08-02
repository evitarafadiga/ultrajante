<script>
    import Card from "./Card.svelte";
    import CardVerse from "./CardVerse.svelte";

    let src = '';
    
    export let villainDeck;
    export let userDeck;

   let villain = villainDeck;
   let goodguy = userDeck;

    export let func;
</script>
<div class="">
    <div class="card-second bg-stone-200 flex float-right">
        {#each villain as villain}
        <CardVerse cardId={villain.name + '.png'} func={func}/>
        {/each}
    </div>

    <div class="justify-center pt-[179px] h-[350px] w-[750px] bg-stone-200 flex">
        {#each userDeck as goodguy}
        <Card cardId={goodguy.name + '.png'} func={func}/>
        {/each}
    </div>
</div>


<style>
    
</style>