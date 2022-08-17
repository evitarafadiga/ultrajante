<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/api/user");
    const data = await res.json();
    console.log("get", data);

    return {
      props: {
        data,
      },
    };
  };

  const userData = async () => {
    try {
      const uid = localStorage.getItem("uid");
      const submit = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          uid,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await submit.json();
      message = data;
    } catch (err) {
      error = err;
    }
  };
  
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

  import InviteBox from "$lib/components/InviteBox.svelte";
  import Chat from "$lib/objects/Chat.svelte";
  import GameGen1 from "$lib/objects/GameGen1.svelte";

  const firebaseApp =
    browser &&
    (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
  const db = browser && getFirestore();

  const auth = getAuth();
  const userdata = getUserdata();
  const nickname = userdata?.displayName;
  const src = '/logo.png';

  let error, message;
      
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

    io.emit("userdata", userdata?.uid);
    
  });

  function getUserdata() {
    const user = auth.currentUser;
    
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      const uid = user.uid;

      return user;
    }
  }

  function getUserDeck() {

  }

</script>

<div class="bg-right-bottom bg-origin-border bg-[url('/bg.png')]">
  
<div class="grid grid-cols-4 gap-[12px]">
  <div class="col-start-2 row-start-1 col-span-3 h-[80px]">
    <!--01
    <h1>Bem vind@ a Ultrajante, {nickname}!</h1> -->
    <img src={src} alt={"Logotipo Ultrajante"} class="object-contain h-[100px] "/>
    
  </div>
  <div class="col-start-1 row-start-2 col-end-2">
    <!--02-->
    
  </div>
  <div class="col-end-6 row-start-2">
    <!--03-->
    <button class="btn float-right" on:click={signOutAll}>Sair</button>
    <Chat />
  </div>
  <div class="col-start-2 row-end-3 col-end-3 col-span-3">
    <!--04-->
    <GameGen1 />
  </div>
  <div class="col-start-1 col-end-5 row-start-4 row-end-7">
    <!--05-->
  </div>
</div>
</div>
