<script lang="ts">
  import { io } from "$lib/realtime";
  import { onMount } from "svelte";

  import ChatMessage from "$lib/components/ChatMessage.svelte";
  import Box from "./Box.svelte";

  let textfield = "";
  let nickname = "";

  let messages = [];

  onMount(() => {
    io.on("message", (message) => {
      // Listen to the message event
      messages = [...messages, message];
    });
    io.on("nickname", (name) => {
      // Another listener for the name:
      nickname = name; // Update the name so it can be displayed
    });

    io.on("global-message", (data) => {
      messages = data;
    });

    io.emit("global-message");
  });

  function sendMessage() {
    const message = textfield.trim();
    if (!message) return;

    textfield = "";
    io.emit("message", message); // Send the message
  }
</script>

<main>
  <Box title="Chat">
    <div class="overflow-auto break-all justify-start h-[281px] w-[339px]">
      <div
        class="translate-x-0 translate-y-0 flex flex-col-reverse easy-in-out inline"
      >
        {#each messages as message (message)}
          <ChatMessage
            message={message.message}
            nickname={message.from}
            timestamp={message.time}
          />
        {/each}
      </div>
    </div>
    <div class="bg-white-200">
      <form
        action="#"
        on:submit|preventDefault={sendMessage}
        class="px-3 py-1 border-t border-stone-400 text-black shrink-0 flex items-center"
      >
        <input
          type="text"
          bind:value={textfield}
          placeholder="Envie sua mensagem..."
          class="bg-transparent border-none px-4 py-3 w-full"
        />
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  </Box>
</main>
