<script lang="ts">
    import { page } from '$app/stores'
    import { PUBLIC_GAMID } from '$env/static/public';

      if (typeof gtag !== 'undefined') {
        gtag('config', PUBLIC_GAMID, {
          page_title: document.title,
          page_path: $page.url.pathname,
        })
      }
  </script>
  
  <svelte:head>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=MEASUREMENT_ID">
    </script>
    <script>
      window.dataLayer = window.dataLayer || []
  
      function gtag() {
        dataLayer.push(arguments)
      }
  
      gtag('js', new Date())
      gtag('config', 'MEASUREMENT_ID')
    </script>
  </svelte:head>