<script>
    import ChatMessage from "$lib/components/ChatMessage.svelte";
    import Box from "./Box.svelte";
    export let messageId;
    export let nickname
    export let timestamp;
    export let content;
    
</script>

<main>
    <Box title="Chat">
        <div class="">
            <div class="overflow-x-hidden p-[0] relative">
                <div class="translate-x-0 translate-y-0 box-size overflow-auto p-[1px] easy-in-out">
                    <ChatMessage message="Olá, tudo bem? ;D" nickname="Homem-macaco"></ChatMessage>
                    <ChatMessage message="Lá vem o homem macaco" nickname="Teste"></ChatMessage>
                    <ChatMessage message="correndo atrás de mim" nickname="Teste"></ChatMessage>
                    <ChatMessage message="o homem macaco, que não tem alma" nickname="Teste"></ChatMessage>
                    <ChatMessage message="e nem coração" nickname="Teste"></ChatMessage>
                    <ChatMessage message="fim" nickname="Oi"></ChatMessage>
                    <ChatMessage message="fim" nickname="Teste"></ChatMessage>          
                </div>
            </div>
            <div class="border bg-stone-200">
                <div class="w-[274px] p-1">
                    <input class="h-[30px]" type="text" placeholder="Envie sua mensagem...">
                </div>
            </div>
        </div>
    </Box>
</main>