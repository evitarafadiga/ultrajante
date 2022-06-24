<script>
  import "../app.css";
  import { isLoggedIn } from "../stores/authStore";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import App from "$lib/firebaseConfig";
  import { goto } from "$app/navigation";
  import { browser } from "$app/env";

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Bem-vindo a Ultrajante!");
        isLoggedIn.update(() => true);
      } else {
        isLoggedIn.update(() => false);
        goto("/login");
      }
    });
  });
</script>
  
<slot />