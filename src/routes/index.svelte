<script>
    import { initializeApp, getApps, getApp } from "firebase/app";
	import { getAnalytics } from "firebase/analytics";
	import { getFirestore, collection, onSnapshot } from "firebase/firestore";
	import { firebaseConfig } from "$lib/firebaseConfig";
	import { browser } from "$app/env";
    
	const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
	let title, other;
	
	const db = browser && getFirestore();

	console.log({ firebaseApp, db });

    const colRef = browser && collection(db, "user");

    let users = [];

    const checkUsers = browser && onSnapshot(colRef, (querySnapshot) => {
        let fbUsers = [];
        querySnapshot.forEach((doc) => {
            let user = { ...doc.data(), id: doc.id };
            fbUsers = [user, ...fbUsers];
        });
        console.table(fbUsers);
    })

</script>

<h1>Welcome to SvelteKit</h1>
<p>DB: {db}, firebaseApp {firebaseApp}</p>
