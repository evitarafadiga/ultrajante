<script>
  import { initializeApp, getApps, getApp } from "firebase/app";
	import { getAnalytics } from "firebase/analytics";
	import { getFirestore, collection, onSnapshot, doc } from "firebase/firestore";
	import { firebaseConfig } from "$lib/firebaseConfig";
	import { browser } from "$app/env";

  import { getAuth, signInWithPopup, getRedirectResult, GoogleAuthProvider, signOut } from "firebase/auth";
  import 'firebase/auth';
  import GoogleButton from "$lib/components/GoogleButton.svelte";
  import Deck from "$lib/objects/Deck.svelte";
  const provider = new GoogleAuthProvider();

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
  function signInGoogle() {
      signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  function signOutAll () {
      signOut(auth).then(() => {
      // Sign-out successful.
      }).catch((error) => {
      // An error happened.
    });
  }
    

    

  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

</script>


<h1>Bem vind@ a Ultrajante!</h1>
<GoogleButton func={signInGoogle}></GoogleButton>
<p>DB: {db}, firebaseApp {firebaseApp}</p>

<Deck></Deck>
<style>

    

</style>
