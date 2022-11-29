<script>

    export let datatotal;
    export let datavalue;

    let val = datavalue/datatotal*100;
</script>

<div class="health-bar text-green-600 justify-center" style="width:{val}% data-total:{datatotal}% data-value:{datavalue}%">
    <div class="bar" style="width:{val}%">{datavalue}
          <div class="hit" style="width:{val}%"></div>
    </div>
</div>