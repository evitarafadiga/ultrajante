<script>
    import WinnerCard from "$lib/components/WinnerCard.svelte";
    import { each } from "svelte/internal";

    import { winnerlist } from "$lib/Winners";
    import TopBar from "$lib/components/TopBar.svelte";
</script>

<TopBar/>
<ul>
    {#each winnerlist as element}
        <li>
            <WinnerCard
                nums={element.numseason}
                title={element.title}
                desc={element.desc}
                narrname={element.narrname}
                narrpic={element.narrpic}
                playart={element.playart}
                bgseason={element.bgseason}
                narrdesc={element.narrdesc}
                playname={element.playname}
                playpic={element.playpic}
                playdesc={element.playdesc}
            />
        </li>
    {/each}
</ul>
