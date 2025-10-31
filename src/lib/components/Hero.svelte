<script lang="ts">
	const scrollToMenu = () => {
		document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<section
	id="home"
	class="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
>
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5 dark:opacity-10">
		<div
			class="absolute inset-0"
			style="background-image: repeating-linear-gradient(45deg, #6B4423 0, #6B4423 1px, transparent 0, transparent 50%); background-size: 20px 20px;"
		></div>
	</div>

	<div class="fade-in relative z-10 container mx-auto px-4 py-12 md:py-20">
		<div class="mx-auto max-w-4xl text-center">
			<!-- Hero Icon - Tanpa animasi bounce -->
			<div class="mb-6 transition-transform duration-300 hover:scale-110 md:mb-8">
				<span class="text-6xl md:text-8xl">🎭</span>
			</div>

			<!-- Hero Title -->
			<h1
				style="font-family: var(--font-family-display)"
				class="mb-4 text-4xl font-bold text-coffee-dark md:mb-6 md:text-6xl lg:text-7xl dark:text-coffee-light"
			>
				Rumah Si Dalang
			</h1>

			<div class="mx-auto mb-6 h-1 w-24 bg-coffee-caramel md:mb-8"></div>

			<!-- Hero Subtitle -->
			<p
				class="mb-8 px-4 text-lg leading-relaxed text-gray-700 md:mb-12 md:text-xl lg:text-2xl dark:text-gray-300"
			>
				Nikmati cerita dalam setiap cangkir kopi.<br class="hidden md:block" />
				Tempat di mana tradisi bertemu cita rasa modern.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col items-center justify-center gap-4 px-4 sm:flex-row">
				<button on:click={scrollToMenu} class="btn-primary w-full sm:w-auto">
					Lihat Menu Kami
				</button>
				<a
					href="#about"
					class="w-full rounded-lg border-2 border-coffee-dark px-6 py-3 text-center font-medium text-coffee-dark shadow-md transition-all duration-300 hover:bg-coffee-dark hover:text-white hover:shadow-xl sm:w-auto dark:border-coffee-light dark:text-coffee-light dark:hover:bg-coffee-light dark:hover:text-gray-900"
				>
					Tentang Kami
				</a>
			</div>

			<!-- Features -->
			<div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-16 md:gap-8">
				<div class="p-4 text-center transition-transform duration-300 hover:scale-105">
					<div class="mb-3 text-3xl transition-transform duration-300 hover:rotate-12 md:text-4xl">
						☕
					</div>
					<h3 class="mb-2 font-semibold text-coffee-dark dark:text-coffee-light">Kopi Premium</h3>
					<p class="text-sm text-gray-600 dark:text-gray-400">
						Biji kopi pilihan dari berbagai daerah
					</p>
				</div>
				<div class="p-4 text-center transition-transform duration-300 hover:scale-105">
					<div class="mb-3 text-3xl transition-transform duration-300 hover:rotate-12 md:text-4xl">
						🏠
					</div>
					<h3 class="mb-2 font-semibold text-coffee-dark dark:text-coffee-light">Suasana Nyaman</h3>
					<p class="text-sm text-gray-600 dark:text-gray-400">
						Tempat yang hangat seperti di rumah
					</p>
				</div>
				<div class="p-4 text-center transition-transform duration-300 hover:scale-105">
					<div class="mb-3 text-3xl transition-transform duration-300 hover:rotate-12 md:text-4xl">
						🎨
					</div>
					<h3 class="mb-2 font-semibold text-coffee-dark dark:text-coffee-light">Budaya Lokal</h3>
					<p class="text-sm text-gray-600 dark:text-gray-400">
						Mengangkat kearifan lokal Indonesia
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
