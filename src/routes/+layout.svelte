<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  
  onMount(() => {
    // Initialize theme on mount
    if ($theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  });
</script>

<slot />