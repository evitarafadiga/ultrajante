<script>

    import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    

    export let title;
    const googleIcon = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";
    const provider = new GoogleAuthProvider();

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

</script>

<button on:click={signInGoogle} class="justify-center items-center self-center">
    <div class="absolute w-[222px] h-[42px] drop-shadow rounded bg-[#4285f4]">  
        <div class="absolute top-px left-px w-[40px] h-[40px] rounded bg-white">
            <img class="absolute top-[11px] left-[11px] w-[18px] h-[18px]" src={googleIcon} alt={"Google official logo SVG"}/>
        </div>
        <p class="float-right mr-[11px] mt-[11px] text-white text-sm tracking-wide font-roboto">
            <b>
            {#if title == "Login"}
            Entre com Google
            {/if}
            {#if title != "Login"}
            Cadastre-se com Google      
            {/if}
            </b>
        </p>
    </div>  
</button>

