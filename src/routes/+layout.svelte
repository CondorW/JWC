<script>
    import "../app.css";
	import Card from "../components/Card.svelte";
	import Footer from "../components/Footer.svelte";
  </script>
  
<html lang="english" data-theme="luxury"></html>

<body>
  
  <!-- Navbar -->
  <div class="navbar bg-base-300">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">JWConsulting</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
      </button>
    </div>
  </div>
  <!-- Hero Section Content -->
  <slot></slot>
  
</body>
<Footer></Footer>

