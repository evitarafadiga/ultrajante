<script>
    import WinnerCard from "$lib/components/WinnerCard.svelte";
    import { each } from "svelte/internal";

    import { winnerlist } from "$lib/Winners";
</script>

<ul>
    {#each winnerlist as element}
        <li>
            <WinnerCard
                nums={element.numseason}
                title={element.title}
                desc={element.desc}
                narrname={element.narrname}
                narrpic={element.narrpic}
                bgseason={element.bgseason}
                narrdesc={element.narrdesc}
                playname={element.playname}
                playpic={element.playpic}
                playdesc={element.playdesc}
            />
        </li>
    {/each}
</ul>
