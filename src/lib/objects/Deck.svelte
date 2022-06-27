<script>
    import Card from "./Card.svelte";
    import CardVerse from "./CardVerse.svelte";

    let src = '';
    export let cardId;

    function selectCard() {
     console.log("selecionado!") 
  }
</script>
<div class="">
    <div class="card-second bg-stone-200 flex float-right">
        <CardVerse func={selectCard}/>
        <CardVerse func={selectCard}/>
        <CardVerse func={selectCard}/>
        <CardVerse func={selectCard}/>
        <CardVerse func={selectCard}/>
    </div>

    <div class="justify-center pt-[179px] h-[350px] w-[750px] bg-stone-200 flex">
        <Card func={selectCard}/>
        <Card func={selectCard}/>
        <Card func={selectCard}/>
        <Card func={selectCard}/>
        <Card func={selectCard}/>
    </div>
</div>


<style>
    
</style>