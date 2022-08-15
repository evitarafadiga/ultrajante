<script>

    export let datatotal;
    export let datavalue;
    export let func;
</script>

<div class="health-bar" data-total="1000" data-value="1000">
    {#key datavalue}
    <div class="bar" style="width:{datavalue}">
          <div class="hit" style="width:{datavalue}"></div>
    </div>
    {/key}
</div>