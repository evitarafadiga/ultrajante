<script>
    import { goto } from "$app/navigation";
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
    
    export let title;
    const auth = getAuth();

    function login() {
      let email = document.getElementById("emailInput").value;
      let password = document.getElementById("passInput").value;
      if (title == "Login") {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            localStorage.setItem("uid", user.uid);
            localStorage.setItem("isLoggedIn", true);
            goto("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            goto("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    }
</script>

<div class="flex justify-center border bg-white w-[476px] h-[275px] rounded-[15px] shadow mt-[156px]">
    <div class="w-[1/2] m-0 m-auto ">
      <div class="mt-[50px] mb-[50px]">
        <h5 class="text-lg">{title}</h5> <br>
        <form on:submit|preventDefault={login}>
          <div class="mb-[3px] float-right">
            <label for="emailInput" class="form-label">Email: </label>
            <input
              type="email"
              class="border rounded"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Endereço de e-mail"
            />
            {#if title != "Login"}
              <div id="emailHelp" class="text-stone-400 text-sm">
                  Nós nunca compartilharemos seu e-mail com ninguém.
              </div>
            {/if}
          </div>
          <div class="mb-[3px]">
            <label for="passInput" class="form-label">Senha: </label>
            <input
              type="password"
              class="border rounded"
              id="passInput"
              placeholder="Senha"
            />
          </div>
          <button type="submit" class="w-[74px] h-[32px] rounded bg-lime-400 shadow float-right">Enviar</button>
        </form>
        {#if title == "Login"}
          <p class="float-end mt-[3px]">
            <br>
            Ainda não tem conta? <a href="/signup" class="underline underline-offset-auto">Cadastre-se</a>
          </p>
        {/if}
      </div>
    </div>
  </div>
  