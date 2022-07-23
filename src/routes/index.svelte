<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/api/user");
    const data = await res.json();
    console.log('get', data);

    return {
      props: {
        data,
      },
    };
  };

  const userData = async () => {
      try  {
        const uid = localStorage.getItem("uid");
        const submit = await fetch("/api/user", {
          method: "POST",
          body: JSON.stringify({
            uid,
          }),
          headers: { "Content-Type": "application/json" }
        });

        const data = await submit.json();
        message = data;
      } catch(err) {
        error = err;
      }
    
    };

    (async () => {const uid = await userData();
      console.log('post 1',uid)
  }) ()
</script>

<script>
  import { io } from "$lib/realtime";
  import { onMount } from "svelte";
  import { initializeApp, getApps, getApp } from "firebase/app";
  import {
    getFirestore,
    collection,
    onSnapshot,
    query,
    where,
    getDocs,
  } from "firebase/firestore";
  import { firebaseConfig } from "$lib/firebaseConfig";
  import { browser } from "$app/env";
  import { getAuth, signOut } from "firebase/auth";

  import Deck from "$lib/objects/Deck.svelte";
  import InviteBox from "$lib/components/InviteBox.svelte";
  import Chat from "$lib/objects/Chat.svelte";

  const firebaseApp =
    browser &&
    (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
  const db = browser && getFirestore();

  const auth = getAuth();
  const colRef = browser && collection(db, "user");
  let userdata = load;

  function signOutAll() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  onMount(() => {
    io.on("userdata", (data) => {
      // Listen to the message event
      data = data;
    });

    io.emit("userdata", userdata);
  });

  console.log('uid teste', auth.currentUser);

</script>

<div class="grid grid-cols-4 gap-[20px]">
  <div class="col-start-2 row-start-1 col-span-3">
    01
    <h1>Bem vind@ a Ultrajante, !</h1>
    <p>DB: {db}, firebaseApp {firebaseApp}</p>
  </div>
  <div class="col-start-1 row-start-2 col-end-2">
    02
    <InviteBox />
  </div>
  <div class="col-end-6 row-start-2">
    03
    <button class="btn float-right" on:click={signOutAll}>Sair</button>
    <Chat />
  </div>
  <div class="col-start-2 row-end-3 col-end-3 col-span-3">
    04
    <Deck />
  </div>
</div>
