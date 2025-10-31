<script lang="ts">
	const galleryItems = [
		{ id: 1, emoji: '☕', title: 'Kopi Signature', color: 'from-amber-600 to-amber-800' },
		{ id: 2, emoji: '🥐', title: 'Pastry Fresh', color: 'from-orange-500 to-red-600' },
		{ id: 3, emoji: '🍰', title: 'Dessert Premium', color: 'from-pink-500 to-purple-600' },
		{ id: 4, emoji: '🎨', title: 'Latte Art', color: 'from-coffee-light to-coffee-dark' },
		{ id: 5, emoji: '🌿', title: 'Suasana Nyaman', color: 'from-green-500 to-emerald-700' },
		{ id: 6, emoji: '🎭', title: 'Budaya Lokal', color: 'from-blue-500 to-indigo-600' }
	];
</script>

<section id="gallery" class="bg-white py-16 md:py-24 dark:bg-gray-800">
	<div class="container mx-auto px-4">
		<div class="slide-up mb-12 text-center md:mb-16">
			<h2 class="section-title">Galeri Kami</h2>
			<div class="mx-auto mb-6 h-1 w-24 bg-coffee-caramel"></div>
			<p class="mx-auto max-w-2xl text-gray-700 dark:text-gray-300">
				Intip suasana dan ragam menu yang kami tawarkan
			</p>
		</div>

		<div class="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
			{#each galleryItems as item (item.id)}
				<div
					class="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
				>
					<div
						class="absolute inset-0 bg-gradient-to-br {item.color} flex transform flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110"
					>
						<span
							class="mb-4 text-6xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 md:text-8xl"
						>
							{item.emoji}
						</span>
						<div
							class="absolute inset-0 flex items-end bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-6"
						>
							<h3 class="text-lg font-bold text-white drop-shadow-lg md:text-xl">{item.title}</h3>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Instagram Section -->
		<div class="slide-up mt-16 text-center">
			<div
				class="inline-block rounded-2xl bg-gradient-to-br from-coffee-medium to-coffee-dark p-8 shadow-2xl md:p-12"
			>
				<span class="mb-4 block text-5xl">📸</span>
				<h3
					style="font-family: var(--font-family-display)"
					class="mb-4 text-2xl font-bold text-white md:text-3xl"
				>
					Ikuti Kami di Instagram
				</h3>
				<p class="mb-6 text-white/90">Tag kami di foto Anda untuk berkesempatan ditampilkan!</p>
				<a
					href="https://instagram.com/rumahsidalang"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-lg bg-white px-8 py-3 font-medium text-coffee-dark transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
				>
					@rumahsidalang
				</a>
			</div>
		</div>
	</div>
</section>
