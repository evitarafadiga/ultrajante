<script>
    import Deck from "./Deck.svelte";
    import { arsenal } from "../data/arsenal";
    import { io } from "$lib/realtime";
    import { goto } from "$app/navigation";
    import Healthbar from "$lib/components/Healthbar.svelte";

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

    function callWin() {
        console.log('Missão completa!');
    }

    function callLose() {
        console.log('Missão perdida!');
        userDeck.pop();
    }

    function setDamage(op) {
        
        if (op === 1) {
            let atk = arsenal['rasputin'].stats.atk;
            villainHP -= Math.floor((criticalRatio() * atk) / 10);
            if (villainHP <= 84 * villains.length + (-84)) {
                villains.pop();
            }
            
        } else {
            HP += 10;

        }

        if (villainHP < 0) {
            if (HP > 0) callWin();
            if (HP < 0) callLose();
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

        if(HP < 0) callLose();
       
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
        
    }

    io.on('test', startMission);

</script>

<div class="">
    {#if activebtn}
    <button class="btn" on:click|preventDefault={startMission}>Iniciar Missão</button>
    {/if}
    {#key mission}
    <div class="flex overflow">
        ROUND - {round} <br>
        {#key villainHP}
        <div class="flex p-[20px] pl-[387px]">
            Cebollurl: <Healthbar datavalue={villainHP} datatotal={420}/>
        </div>
        {/key}
    </div>   
    <Deck
    villainDeck={villains} userDeck={userDeck} func={selectCard} isActive={active} movefunc={setDamage} />
    
    <div class="flex overflow">
        {#key HP}
        <div class="flex p-[20px]">
            Rasputin: <Healthbar datavalue={HP} datatotal={157}/>
        </div>
        {/key}
    </div>
    {/key}
</div>