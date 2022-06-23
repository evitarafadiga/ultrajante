<script>
    import Card from "./Card.svelte";

    let src = '';
    export let cardId;

    function selectCard() {
     console.log("selecionado!") 
  }
</script>

<main class="inline-block absolute h-[300px] w-[600px] top-[160px] flex">
    <Card func={selectCard}/>
    <Card func={selectCard}/>
    <Card func={selectCard}/>
    <Card func={selectCard}/>
    <Card func={selectCard}/>
</main>

<style>
    
</style>