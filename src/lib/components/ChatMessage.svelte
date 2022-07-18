<script>
    export let nickname;
	export let message;
    export let timestamp;
	
	console.log("AAA", nickname)
	console.log(message)
	console.log(timestamp)
</script>

<div class="mb-[10px] text-[12px] break-all break-words">
	<div class="float-right">
        <span class="ml-[10px] mr-[10px] text-gray-400 text-[10px]">				
			{timestamp}					
		</span>
    </div>
    <div class="block">
		<div class="d-flex">
			<span class="mr-auto font-semibold">{nickname}:</span>
			<span class="mr-auto">{message}</span>
		</div>
	</div>
</div>