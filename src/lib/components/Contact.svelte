<script lang="ts">
	const contactInfo = [
		{
			icon: '📍',
			title: 'Alamat',
			content: 'Jl. Wayang No. 123, Jakarta Selatan',
			subContent: 'Indonesia 12345'
		},
		{
			icon: '📞',
			title: 'Telepon',
			content: '+62 812-3456-7890',
			subContent: 'Senin - Minggu'
		},
		{
			icon: '⏰',
			title: 'Jam Buka',
			content: '08:00 - 22:00 WIB',
			subContent: 'Setiap Hari'
		},
		{
			icon: '✉️',
			title: 'Email',
			content: 'hello@rumahsidalang.com',
			subContent: 'Respon dalam 24 jam'
		}
	];

	const socialMedia = [
		{ icon: '📘', name: 'Facebook', link: '#' },
		{ icon: '📸', name: 'Instagram', link: '#' },
		{ icon: '🐦', name: 'Twitter', link: '#' },
		{ icon: '🎵', name: 'TikTok', link: '#' }
	];
</script>

<section id="contact" class="bg-coffee-cream py-16 md:py-24 dark:bg-gray-900">
	<div class="container mx-auto px-4">
		<div class="slide-up mb-12 text-center md:mb-16">
			<h2 class="section-title">Hubungi Kami</h2>
			<div class="mx-auto mb-6 h-1 w-24 bg-coffee-caramel"></div>
			<p class="mx-auto max-w-2xl text-gray-700 dark:text-gray-300">
				Kami siap melayani Anda. Jangan ragu untuk menghubungi kami!
			</p>
		</div>

		<div class="mx-auto max-w-6xl">
			<!-- Contact Info Grid -->
			<div class="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each contactInfo as info}
					<div class="card p-6 text-center transition-all duration-300 hover:scale-105">
						<div class="mb-4 text-4xl transition-transform duration-300 hover:rotate-12">
							{info.icon}
						</div>
						<h3 class="mb-2 text-lg font-bold text-coffee-dark dark:text-coffee-light">
							{info.title}
						</h3>
						<p class="mb-1 font-medium text-gray-700 dark:text-gray-300">
							{info.content}
						</p>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							{info.subContent}
						</p>
					</div>
				{/each}
			</div>

			<!-- Map Section -->
			<div class="card mb-12 overflow-hidden transition-all duration-300 hover:scale-[1.02]">
				<div
					class="flex aspect-video items-center justify-center bg-gradient-to-br from-coffee-light to-coffee-medium"
				>
					<div class="text-center">
						<span class="mb-4 block text-8xl">🗺️</span>
						<p class="text-xl font-bold text-coffee-dark drop-shadow-lg">Lokasi Kami</p>
						<p class="text-coffee-dark/80 drop-shadow">Klik untuk membuka Google Maps</p>
					</div>
				</div>
			</div>

			<!-- Social Media -->
			<div class="mb-12 text-center">
				<h3
					style="font-family: var(--font-family-display)"
					class="mb-6 text-2xl font-bold text-coffee-dark md:text-3xl dark:text-coffee-light"
				>
					Ikuti Media Sosial Kami
				</h3>
				<div class="flex flex-wrap justify-center gap-4">
					{#each socialMedia as social}
						<a
							href={social.link}
							class="flex transform items-center gap-2 rounded-full bg-white px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-coffee-light hover:shadow-xl active:scale-95 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							<span class="text-2xl">{social.icon}</span>
							<span class="font-medium text-coffee-dark dark:text-coffee-light">{social.name}</span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Newsletter -->
			<div
				class="rounded-2xl bg-gradient-to-br from-coffee-dark to-coffee-medium p-8 text-center shadow-2xl md:p-12"
			>
				<span class="mb-4 block text-5xl">📬</span>
				<h3
					style="font-family: var(--font-family-display)"
					class="mb-4 text-2xl font-bold text-white drop-shadow-lg md:text-3xl"
				>
					Dapatkan Promo Spesial
				</h3>
				<p class="mx-auto mb-6 max-w-xl text-white/95 drop-shadow">
					Daftarkan email Anda untuk mendapatkan info promo dan menu terbaru dari kami
				</p>
				<div class="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
					<input
						type="email"
						placeholder="Email Anda"
						class="flex-1 rounded-lg bg-white px-4 py-3 text-gray-900 placeholder-gray-500 shadow-md focus:ring-2 focus:ring-coffee-caramel focus:outline-none dark:bg-gray-700 dark:text-white"
					/>
					<button
						class="rounded-lg bg-coffee-caramel px-6 py-3 font-medium whitespace-nowrap text-white transition-all duration-300 hover:scale-105 hover:bg-amber-600 hover:shadow-xl active:scale-95"
					>
						Daftar Sekarang
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-coffee-dark py-8 text-white dark:bg-gray-950">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
			<div class="flex items-center gap-2">
				<span class="text-3xl">🎭</span>
				<div>
					<h3 style="font-family: var(--font-family-display)" class="text-xl font-bold">
						Rumah Si Dalang
					</h3>
					<p class="text-sm text-white/70">Coffee & Eatery</p>
				</div>
			</div>

			<div class="text-center md:text-right">
				<p class="text-sm text-white/90">© 2025 Rumah Si Dalang. Seluruh hak cipta dilindungi.</p>
				<p class="mt-1 text-xs text-white/70">Dibuat dengan ❤️ dan ☕ di Indonesia</p>
			</div>
		</div>
	</div>
</footer>
