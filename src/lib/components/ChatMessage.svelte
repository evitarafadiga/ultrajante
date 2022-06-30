<script>
	
    export let nickname;
	export let message;
    export let timestamp;	
	
</script>

<div class="mb-[10px] text-[12px]">
	<div class="float-right">
        <span class="ml-[10px] mr-[50px] text-gray-400 text-[10px]">				
			{new Date(timestamp).toLocaleString([], {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit', hour12: false})}					
		</span>
    </div>
    <div class="block">
		<div class="d-flex">
			<span class="mr-auto font-semibold">{nickname}:</span>
			<span class="mr-auto">{message}</span>
		</div>
	</div>
</div>