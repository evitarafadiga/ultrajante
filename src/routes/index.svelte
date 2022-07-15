<script>
  import { initializeApp, getApps, getApp } from "firebase/app";
	import { getFirestore, collection, onSnapshot, query, where } from "firebase/firestore";
	import { firebaseConfig } from "$lib/firebaseConfig";
	import { browser } from "$app/env";
  import { getAuth, signOut } from "firebase/auth";

  import Deck from "$lib/objects/Deck.svelte";
  import InviteBox from "$lib/components/InviteBox.svelte";
  import Chat from "$lib/objects/Chat.svelte";

	const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
	const db = browser && getFirestore();
	console.log({ firebaseApp, db });

  const auth = getAuth();
  
  const colRef = browser && collection(db, "usercard");
  const globalChatRef = browser && collection(db, "globalchat");
  
  const checkUsers = browser && onSnapshot(colRef, (querySnapshot) => {
      let deckFromUser = [];
      querySnapshot.forEach((doc) => {
          let usercards = { ...doc.data(), id: doc.id };
          deckFromUser = [usercards, ...deckFromUser];
      });
      console.table(deckFromUser);
  })

  const checkGlobalChat = browser && onSnapshot(globalChatRef, (querySnapshot) => {
      let globalChatMessages = [];
      querySnapshot.forEach((doc) => {
          let globalMessages = { ...doc.data(), id: doc.id };
          globalChatMessages = [globalMessages, ...globalChatMessages];
      });
      console.table(globalChatMessages);
  }) 
  
  function signOutAll () {
      signOut(auth).then(() => {
      // Sign-out successful.
      }).catch((error) => {
      // An error happened.
    });
  }
  
</script>

<div class="grid grid-cols-4 gap-[20px]">
  <div class="col-start-2 row-start-1 col-span-3">
    01
    <h1>Bem vind@ a Ultrajante, !</h1>
    <p>DB: {db}, firebaseApp {firebaseApp}</p>
  </div>
  <div class="col-start-1 row-start-2 col-end-2">
    02
    <InviteBox></InviteBox>
  </div>
  <div class="col-end-6 row-start-2">
    03
    <button class="btn float-right" on:click={signOutAll}>Sair</button>
    <Chat></Chat>
  </div>
  <div class="col-start-2 row-end-3 col-end-3 col-span-3">
    04
    <Deck></Deck>
  </div>
</div>

