<script>
    import { movepool } from "$lib/data/movepool";
    import Box from "$lib/objects/Box.svelte";

    export let movefunc;
    export let moves = [movepool['laminaastral'],
        movepool['docebeberico']];
    let active1 = false;
    let active2 = false;
    
    function handleMouseOver1(e) {
		active1 = !active1;
	}
	function handleMouseOut1(e) {
		active1 = !active1;
	}

    function handleMouseOver2(e) {
		active2 = !active2;
	}
	function handleMouseOut2(e) {
		active2 = !active2;
	}
</script>

<div class="pl-[20px]">
    <div class="p-[2px] flex">
        <button on:mouseover={handleMouseOver1} on:mouseout={handleMouseOut1} on:click={movefunc(1)} move={moves[0]} class="btn text-xs bg-purple-600 w-[130px]">{moves[0].name}</button>
    {#if active1}
    <div class="pl-[20px] w-[180px] relative transition ease-out bg-black text-white text-[10px]">
        Corta a vítima causando 70 de dano. (Tipo Bruxo)
    </div>
    {/if}
    </div>
    <div class="p-[2px] flex">
        <button on:mouseover={handleMouseOver2} on:mouseout={handleMouseOut2} on:click={movefunc(2)} move={moves[1]} class="btn text-xs bg-cyan-500 w-[130px]">{moves[1].name}</button>
    {#if active2}
        <div class="pl-[20px] w-[180px] relative transition ease-out text-white bg-black text-[10px]">
            Restaura 10 de vida. (Tipo Água)
        </div>
    {/if}
    </div>
    
</div>

