<script>
    import Box from "$lib/objects/Box.svelte";

    export let userdeck = [];

    function inviteToBattle() {
        console.log('convidando...');
        
    }
</script>

<Box title="Convide um amigo!">
    <form on:submit|preventDefault={inviteToBattle}>
        <label for="nicknameInput" class="">Nickname: </label>
        <input
              type="nickname"
              class="border rounded"
              id="nicknameInput"
              aria-describedby="nicknameHelp"
              placeholder=""
        />
        <select id="deckInput" class="m-[10px] w-[200px] h-[32px]">
            {#each userdeck as deck}
                <option value="deck.id">{deck.name}</option>
            {:else}
                <p>Sem decks!</p>
            {/each}         
        </select>
        <button type="submit" class="m-[10px] w-[74px] h-[32px] rounded bg-yellow-400 shadow float-right">Convidar</button>
    </form>
</Box>