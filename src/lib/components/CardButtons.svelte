<script>
import { movepool } from "$lib/data/movepool";

    export let movefunc;
    export let moves = [movepool['laminaastral'],
        movepool['docebeberico']];
</script>

<div class="">
    <button on:click={movefunc(1)} move={moves[0]} class="btn text-xs bg-purple-600 w-[130px]">{moves[0].name}</button>
    <button on:click={movefunc(2)} move={moves[1]} class="btn text-xs bg-cyan-500 w-[130px]">{moves[1].name}</button>
</div>

