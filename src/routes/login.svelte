<script>
import GoogleButton from "$lib/components/GoogleButton.svelte";
import LoginForm from "$lib/components/LoginForm.svelte";

</script>

<div class="grid grid-rows-2 place-content-center">
    <div>
        <LoginForm title="Login" />
    </div>
    <div class="items-center justify-center">
        <GoogleButton title="Login" />
    </div>
</div>
