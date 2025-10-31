<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Menu from '$lib/components/Menu.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
  <title>Rumah Si Dalang - Coffee & Eatery</title>
  <meta name="description" content="Nikmati cerita dalam setiap cangkir kopi di Rumah Si Dalang. Tempat di mana tradisi bertemu cita rasa modern." />
</svelte:head>

<div class="min-h-screen">
  <Navbar />
  <Hero />
  <About />
  <Menu />
  <Gallery />
  <Contact />
</div>