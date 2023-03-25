<script lang="ts"> 
import { get } from "svelte/store";
import { preferences } from "$lib/userStore";


function acceptGdpr(){
  preferences.set({acceptAllCookies: true});
}




</script>



{#if $preferences.acceptAllCookies == false}
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle modal-open">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Cookie and GDPR Consent</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <button on:click={acceptGdpr} class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </button>
  </div>
</div>    
{/if}
