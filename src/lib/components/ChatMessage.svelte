<script>
    export let nickname;
	export let message;
    export let timestamp;
</script>

<div class="mb-[10px] text-[12px]">
	<div class="float-right">
        <span class="ml-[10px] mr-[10px] text-gray-400 text-[10px]">				
			{timestamp}					
		</span>
    </div>
    <div class="block">
		<div class="d-flex">
			<span class="mr-auto">{nickname}:</span>
			<span class="mr-auto">{message}</span>
		</div>
	</div>
</div>