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
    import Rectangle from "$lib/objects/Rectangle.svelte";
    import TopBar from "$lib/components/TopBar.svelte";

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


<TopBar/>
 

<div class="grid grid-cols-4 gap-[12px]">
  <div class="col-start-2 row-start-1 col-span-3 h-[80px] hidden md:flex max-h-7xl mx-auto">
    01
    <h1>Bem vind@ a Ultrajante, {nickname}!</h1> 
  </div>
  <div class="shrink col-start-1 row-start-2 col-end-2 max-w-2xl mx-auto">
   02
   <GameGen1 />
  </div>
  <div class="col-end-6 row-start-2 hidden md:flex max-w-7xl mx-auto">
    03
    
    
    <Chat />
  </div>
  <!--<div class="col-start-2 row-end-3 col-end-3 col-span-3 shrink">
    04
    
  </div>
   <div class="col-start-1 col-end-5 row-start-4 row-end-7">
    05 
  </div> -->
</div>
