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

{#if $preferences.acceptAllCookies == false && $page.url.pathname == "/PrivacyPolicy"}
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Cookie and GDPR Consent</h3>
		<p class="py-4">
			I hereby give my <strong>explicit</strong> consent regarding the processing of my personal Data.
			<br>
			I hereby give my <strong>explicit</strong> consent regarding the use of Cookies.
			<br>
			I hereby <strong>explicitly</strong> agree to the <a class="underline" href="/PrivacyPolicy">privacy policy</a>.
			<br>
		</p>
		<div class="flex justify-between">
		<button on:click={acceptGdpr} class="btn modal-action">
			Yes I give my explicit consent
		</button>
		<button class="btn modal-action">
			<a href="https://www.google.com">
				No I deny
			</a>
		</button>
	</div>
	</div>
</div>
{:else if $preferences.acceptAllCookies == false}
	<input type="checkbox" id="my-modal-6" class="modal-toggle" />
	<div class="modal modal-bottom sm:modal-middle modal-open">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Cookie and GDPR Consent</h3>
			<p class="py-4">
				I hereby give my <strong>explicit</strong> consent regarding the processing of my personal Data.
				<br>
				I hereby give my <strong>explicit</strong> consent regarding the use of Cookies.
				<br>
				I hereby <strong>explicitly</strong> agree to the <a class="underline" href="/PrivacyPolicy">privacy policy</a>.
				<br>
			</p>
			<div class="flex justify-between">
			<button on:click={acceptGdpr} class="btn modal-action">
				Yes I give my explicit consent
			</button>
			<button class="btn modal-action">
				<a href="https://www.google.com">
					No I deny
				</a>
			</button>
		</div>
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
