<script lang="ts">
	import { preferences } from '$lib/userStore';
	import { page } from '$app/stores';
	import { PUBLIC_GAMID } from '$env/static/public';

	if (typeof gtag !== 'undefined') {
		gtag('config', PUBLIC_GAMID, {
			page_title: document.title,
			page_path: $page.url.pathname
		});
	}
	function consentGranted() {
    console.log("AD Cookies placed");
		gtag('consent', 'update', {
			ad_storage: 'granted',
      analytics_storage: 'granted'
		});
	}

	function acceptGdpr() {
    console.log("GDPR accepted");
    
		preferences.set({ acceptAllCookies: true });
    consentGranted();
	}
</script>

{#if $preferences.acceptAllCookies == false}
	<input type="checkbox" id="my-modal-6" class="modal-toggle" />
	<div class="modal modal-bottom sm:modal-middle modal-open">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Cookie and GDPR Consent</h3>
			<p class="py-4">
				You've been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>
			<button on:click={acceptGdpr} class="modal-action">
				<label for="my-modal-6" class="btn">Yay!</label>
			</button>
		</div>
	</div>
{/if}

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=MEASUREMENT_ID">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('consent', 'default', {
			ad_storage: 'denied',
			analytics_storage: 'denied'
		});
		gtag('js', new Date());
		gtag('config', 'MEASUREMENT_ID');
	</script>
</svelte:head>
