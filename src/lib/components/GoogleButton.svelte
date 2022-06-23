<script>
    export let func;
    const googleIcon = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";


</script>

<button on:click={func}>
    <div class="google-btn">  
        <div class="google-icon-wrapper">
            <img class="google-icon" src={googleIcon} alt={"Google official logo SVG"}/>
        </div>
        <p class="btn-txt"><b>Entre com Google</b></p>
    </div>  
</button>

<style>
    .google-btn {
        width: 211px;
        height: 42px;
        border-radius: 2px;
        background-color: #4285f4;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    }
    .google-icon-wrapper {
        position: absolute;
        margin-top: 1px;
        margin-left: 1px;
        width: 40px;
        height: 40px;
        border-radius: 2px;
        background-color: white;
    }
    .google-icon {
      position: absolute;
      margin-top: 11px;
      margin-left: 11px;
      width: 18px;
      height: 18px;
    }
    .btn-text, p {
      float: right;
      margin: 11px 11px 0 0;
      color: white;
      font-size: 14px;
      letter-spacing: 0.2px;
      font-family: "Roboto";
    }

    @import url(https://fonts.googleapis.com/css?family=Roboto:500);
</style>

