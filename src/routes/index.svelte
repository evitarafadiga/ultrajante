<script>
  import { initializeApp, getApps, getApp } from "firebase/app";
	import { getFirestore, collection, onSnapshot, doc } from "firebase/firestore";
	import { firebaseConfig } from "$lib/firebaseConfig";
	import { browser } from "$app/env";

  import { getAuth, signOut } from "firebase/auth";
  import 'firebase/auth';

  import Deck from "$lib/objects/Deck.svelte";

	const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
	let title, other, email, password, error;
	
	const db = browser && getFirestore();
    
	console.log({ firebaseApp, db });

  const colRef = browser && collection(db, "user");
  let users = [];

  /*
  const checkUsers = browser && onSnapshot(colRef, (querySnapshot) => {
      let fbUsers = [];
      querySnapshot.forEach((doc) => {
          let user = { ...doc.data(), id: doc.id };
          fbUsers = [user, ...fbUsers];
      });
      console.table(fbUsers);
  }) 
  */
  
  const auth = getAuth();
  
  function signOutAll () {
      signOut(auth).then(() => {
      // Sign-out successful.
      }).catch((error) => {
      // An error happened.
    });
  }
  
</script>


<h1>Bem vind@ a Ultrajante!</h1>

<p>DB: {db}, firebaseApp {firebaseApp}</p>

<Deck></Deck>

<button on:click={signOutAll}>Sair</button>
<style>

    

</style>
