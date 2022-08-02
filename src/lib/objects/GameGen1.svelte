<script>
    import Deck from "./Deck.svelte";
    import { arsenal } from "../data/arsenal";

    export const villains = [];
    export const userDeck = [];

    const criticalRatio = () => {
    return Math.floor (Math.random() * 6);
    }

    function selectCard() {

     console.log("selecionado!")
    
    }

    function setDamage() {

    }

    function startMission() {

        userDeck.push(arsenal['rasputin']);
        console.log(userDeck)
        let round = 1;

        for (let index = 0; index < 5; index++) {

            villains.push(arsenal['cebollurl']);
            
        }

        const nextTurn = async () => {

            let ratio = criticalRatio();


        }
        
    }
    
    function nextRound() {

    }
</script>

<div>
    <button class="btn" on:click={startMission}> CLICK ME</button>
    <Deck
    villainDeck={villains} userDeck={userDeck} func={selectCard} />
</div>