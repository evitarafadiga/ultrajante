<script>
    export let title;
</script>

<main>
    <div class="border bg-white box-size rounded-[15px] shadow mt-[56px]">
        <div class="m-[10px]">
            <h5 class="text-lg">{title}</h5>
            <slot></slot>
        </div>
    </div>
</main>