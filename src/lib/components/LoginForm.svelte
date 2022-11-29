<script>
  import { goto } from "$app/navigation";
  import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";

  import {
    getFirestore,
    collection,
    onSnapshot,
    query,
    where,
    getDocs,
    addDoc,
    serverTimestamp,
  } from "firebase/firestore";
  import { browser } from "$app/env";
  import { initializeApp, getApps, getApp } from "firebase/app";
  import { firebaseConfig } from "$lib/firebaseConfig";

  const firebaseApp =
    browser &&
    (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
  const db = browser && getFirestore();

  export let title;
  let b = false;
  let error = "";
  let message = "";
  const auth = getAuth();
  let src = "/logo.png";
  function login() {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;
    if (title == "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("uid", user.uid);
          localStorage.setItem("isLoggedIn", true);

          (async () => {
            const uid = await userData();
            console.log("post 1", uid);
          })();
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

          let nickname = document.getElementById("nicknameInput").value;
          changeNickname(nickname);
          
          (async () => {
            const userRef = await addDoc(collection(db, "user"), {
              nickname: nickname,
              hashtag: `${Math.round(Math.random() * 9999)}`,
              userId: user.uid,
              level: 0,
              points: 0,
              emeralds: 0,
              spirits: 0,
              createdAt: serverTimestamp(),
            });

            const cardsRef = await addDoc(collection(db, "usercard"), {
              cardKey: "cebollurl",
              userId: user.uid,
              createdAt: serverTimestamp(),
            });

            const badgeRef = await addDoc(collection(db, "userbadge"), {
              badgeId: "BR0001",
              userId: user.uid,
              createdAt: serverTimestamp(),
            });

            const deckRef = await addDoc(collection(db, "userdeck"), {
              title: "Deck Padrão",
              description:
                "Deck gerado automaticamente ao se cadastrar em Ultrajante",
              userId: user.uid,
              createdAt: serverTimestamp(),
            });

            const frameRef = await addDoc(collection(db, "userframe"), {
              title: "Frame Padrão",
              description: "Frame padrão de cartas Ultrajante",
              userId: user.uid,
              createdAt: serverTimestamp(),
            });
          })();

          goto("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  function checkUsernameAvailability() {
    return async () => {
      let nickname = document.getElementById("nicknameInput").value;
      const q = query(
        collection(db, "user"),
        where("nickname", "==", nickname)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc) {
          alert("Nome de usuário " + nickname + " indisponível!");
          console.log(checkUsernameAvailability());
        }
      });
    };
  }

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

  function changeNickname(nickname) {
    updateProfile(auth.currentUser, {
      displayName: nickname,
    })
      .then(() => {
        console.log('sucesso de alteração de nickname')
      })
      .catch((error) => {
        console.log(error)
      });
  }
</script>
<div
  class="flex justify-center border bg-white w-[476px] h-[275px] rounded-[15px] shadow mt-[56px]"
>
  <div class="w-[1/2] m-0 m-auto ">
    <div class="mt-[50px] mb-[50px]">
      <h5 class="text-lg">{title}</h5>
      <br />
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
            <label for="nicknameInput" class="form-label">Nickname: </label>
            <input
              type="nickname"
              class="border rounded"
              id="nicknameInput"
              aria-describedby="nicknameHelp"
              placeholder="Escolha um nome de usuário"
            />
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
        <button
          type="submit"
          class="w-[74px] h-[32px] rounded bg-lime-400 shadow float-right"
          >Enviar</button
        >
      </form>
      {#if title == "Login"}
        <p class="float-end mt-[3px]">
          <br />
          Ainda não tem conta?
          <a href="/signup" class="underline underline-offset-auto"
            >Cadastre-se</a
          >
        </p>
      {/if}
    </div>
  </div>
</div>
