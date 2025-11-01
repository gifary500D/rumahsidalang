<script lang="ts">
	import { theme } from '$lib/stores/theme';

	let mobileMenuOpen = false;

	const toggleTheme = () => {
		theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
	};

	const navLinks = [
		{ name: 'Beranda', href: '#home' },
		{ name: 'Tentang', href: '#about' },
		{ name: 'Tim Kami', href: '#founders' },
		{ name: 'Menu', href: '#menu' },
		{ name: 'Galeri', href: '#gallery' },
		{ name: 'Kontak', href: '#contact' }
	];

	const scrollToSection = (href: string) => {
		mobileMenuOpen = false;
		const element = document.querySelector(href);
		element?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 bg-white/95 shadow-md backdrop-blur-md dark:bg-gray-900/95"
>
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between md:h-20">
			<!-- Logo -->
			<div class="flex items-center space-x-2">
				<span class="text-3xl">🎭</span>
				<div>
					<h1
						style="font-family: var(--font-family-display)"
						class="text-xl font-bold text-coffee-dark md:text-2xl dark:text-coffee-light"
					>
						Rumah Si Dalang
					</h1>
					<p class="hidden text-xs text-gray-600 md:block dark:text-gray-400">Coffee & Eatery</p>
				</div>
			</div>

			<!-- Desktop Menu -->
			<div class="hidden items-center space-x-6 md:flex lg:space-x-8">
				{#each navLinks as link}
					<button
						on:click={() => scrollToSection(link.href)}
						class="text-sm font-medium text-gray-700 transition-colors hover:text-coffee-dark lg:text-base dark:text-gray-300 dark:hover:text-coffee-light"
					>
						{link.name}
					</button>
				{/each}

				<!-- Theme Toggle -->
				<button
					on:click={toggleTheme}
					class="rounded-lg bg-coffee-cream p-2 transition-colors hover:bg-coffee-light dark:bg-gray-800 dark:hover:bg-gray-700"
					aria-label="Toggle theme"
				>
					{#if $theme === 'dark'}
						<span class="text-xl">☀️</span>
					{:else}
						<span class="text-xl">🌙</span>
					{/if}
				</button>
			</div>

			<!-- Mobile Menu Button -->
			<div class="flex items-center space-x-2 md:hidden">
				<button
					on:click={toggleTheme}
					class="rounded-lg bg-coffee-cream p-2 dark:bg-gray-800"
					aria-label="Toggle theme"
				>
					{#if $theme === 'dark'}
						<span class="text-lg">☀️</span>
					{:else}
						<span class="text-lg">🌙</span>
					{/if}
				</button>

				<button
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="rounded-lg bg-coffee-dark p-2 text-white"
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<span class="text-xl">✕</span>
					{:else}
						<span class="text-xl">☰</span>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="animate-fade-in pb-4 md:hidden">
				{#each navLinks as link}
					<button
						on:click={() => scrollToSection(link.href)}
						class="block w-full px-4 py-3 text-left font-medium text-gray-700 transition-colors hover:bg-coffee-cream dark:text-gray-300 dark:hover:bg-gray-800"
					>
						{link.name}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</nav>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.3s ease-out;
	}
</style>
