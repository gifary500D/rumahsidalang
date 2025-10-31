<script lang="ts">
	import { menuItems, categories, type MenuItem } from '$lib/data/menu';

	let selectedCategory = 'all';

	$: filteredMenu =
		selectedCategory === 'all'
			? menuItems
			: menuItems.filter((item) => item.category === selectedCategory);

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0
		}).format(price);
	};
</script>

<section id="menu" class="bg-coffee-cream py-16 md:py-24 dark:bg-gray-900">
	<div class="container mx-auto px-4">
		<div class="slide-up mb-12 text-center md:mb-16">
			<h2 class="section-title">Menu Kami</h2>
			<div class="mx-auto mb-6 h-1 w-24 bg-coffee-caramel"></div>
			<p class="mx-auto max-w-2xl text-gray-700 dark:text-gray-300">
				Koleksi minuman dan makanan pilihan yang dibuat dengan penuh cinta dan dedikasi
			</p>
		</div>

		<!-- Category Filter -->
		<div class="mb-12 flex flex-wrap justify-center gap-3">
			{#each categories as category}
				<button
					on:click={() => (selectedCategory = category.id)}
					class="rounded-full px-6 py-2 font-medium transition-all duration-300 {selectedCategory ===
					category.id
						? 'scale-105 bg-coffee-dark text-white shadow-lg'
						: 'bg-white text-gray-700 hover:scale-105 hover:bg-coffee-light dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}"
				>
					{category.name}
				</button>
			{/each}
		</div>

		<!-- Menu Grid -->
		<div
			class="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			{#each filteredMenu as item (item.id)}
				<div class="card group">
					<!-- Image -->
					<div
						class="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-coffee-light to-coffee-medium"
					>
						<span
							class="text-7xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
							>{item.image}</span
						>
						{#if item.popular}
							<div
								class="absolute top-3 right-3 rounded-full bg-coffee-caramel px-3 py-1 text-xs font-bold text-white shadow-lg"
							>
								⭐ Populer
							</div>
						{/if}
					</div>

					<!-- Content -->
					<div class="p-5">
						<h3 class="mb-2 line-clamp-1 text-lg font-bold text-coffee-dark dark:text-coffee-light">
							{item.name}
						</h3>
						<p class="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
							{item.description}
						</p>
						<div class="flex items-center justify-between">
							<span class="text-xl font-bold text-coffee-caramel">
								{formatPrice(item.price)}
							</span>
							<button
								class="rounded-lg bg-coffee-dark px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-coffee-medium hover:shadow-lg active:scale-95"
							>
								Pesan
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>

		{#if filteredMenu.length === 0}
			<div class="py-12 text-center">
				<p class="text-gray-600 dark:text-gray-400">Tidak ada menu di kategori ini</p>
			</div>
		{/if}
	</div>
</section>
