<script>
    import Deck from "./Deck.svelte";
    import { arsenal } from "../data/arsenal";
    import { io } from "$lib/realtime";
    import { goto } from "$app/navigation";

    let mission = {};
    let activebtn = true;
    let active = false;
    let round = 1;
    let HP = 0;
    let villainHP = 0;
    
    export const villains = [];
    export const userDeck = [];

    const criticalRatio = () => {
    return Math.floor (Math.random() * 6);
    }

    function selectCard() {
        active = !active;
        mission = mission;
    }

    function setDamage(op) {
        
        if (op === 1) {
            let atk = arsenal['rasputin'].stats.atk;
            villainHP -= Math.floor((criticalRatio() * atk) / 10);
        } else {
            HP += 10;

        }
        if (villainHP <= villainHP * round-1) {
        villains.pop();
        console.log(villains);
        }
        villainDamage();
        round++;
    }
    
    function villainDamage() {
        if (criticalRatio() % 2 == 0) {
            let atk = arsenal['cebollurl'].stats.atk;
            HP -= Math.floor((criticalRatio() * atk / 10));
        } else {
            villainHP += 10;
        }

       
    }

    function startMission() {
        activebtn = false;

        mission = {};

        userDeck.push(arsenal['rasputin']);
        HP = arsenal['rasputin'].stats.hp;
        console.log(userDeck)
        let round = 1;

        for (let index = 0; index < 5; index++) {

            villainHP+= arsenal['cebollurl'].stats.hp;
            villains.push(arsenal['cebollurl']);
            
        }

        const nextTurn = async () => {

            let ratio = criticalRatio();

            let fn = msg => {

                if(msg == selectCard) {

                }



            }

            

        }
        
    }

    io.on('test', startMission);

</script>

<div>
    {#if activebtn}
    <button class="btn" on:click|preventDefault={startMission}>Iniciar Missão</button>
    {/if}
    {#key mission}

    <div>
        ROUND - {round} <br>
        HP: {HP}
        villain: {villainHP}
    </div>
    <Deck
    villainDeck={villains} userDeck={userDeck} func={selectCard} isActive={active} movefunc={setDamage} />
    {/key}
</div>