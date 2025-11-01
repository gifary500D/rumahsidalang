<script lang="ts">
	import { onMount } from 'svelte';

	interface Founder {
		id: number;
		name: string;
		role: string;
		description: string;
		image: string;
		social: {
			instagram?: string;
			linkedin?: string;
			email?: string;
		};
	}

	const founders: Founder[] = [
		{
			id: 1,
			name: 'Budi Santoso',
			role: 'Co-Founder & CEO',
			description:
				'Pencinta kopi sejati dengan pengalaman 15 tahun di industri kuliner. Memimpin visi Rumah Si Dalang untuk melestarikan budaya kopi Indonesia.',
			image: '/founder1.jpg',
			social: {
				instagram: '#',
				linkedin: '#',
				email: 'budi@rumahsidalang.com'
			}
		},
		{
			id: 2,
			name: 'Siti Nurhaliza',
			role: 'Co-Founder & Head Barista',
			description:
				'Juara kompetisi barista nasional. Menghadirkan inovasi dalam setiap cangkir kopi dengan sentuhan seni dan tradisi.',
			image: '/founder2.jpg',
			social: {
				instagram: '#',
				linkedin: '#',
				email: 'siti@rumahsidalang.com'
			}
		},
		{
			id: 3,
			name: 'Andi Wijaya',
			role: 'Co-Founder & Creative Director',
			description:
				'Seniman wayang kontemporer yang menggabungkan tradisi dengan modernitas. Menciptakan identitas visual Rumah Si Dalang.',
			image: '/founder3.jpg',
			social: {
				instagram: '#',
				linkedin: '#',
				email: 'andi@rumahsidalang.com'
			}
		}
	];

	let visibleCards: boolean[] = founders.map(() => false);
	let sectionElement: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Animate cards one by one with delay
						founders.forEach((_, index) => {
							setTimeout(() => {
								visibleCards[index] = true;
							}, index * 200); // 200ms delay between each card
						});
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		if (sectionElement) {
			observer.observe(sectionElement);
		}

		return () => {
			if (sectionElement) {
				observer.unobserve(sectionElement);
			}
		};
	});
</script>

<section
	bind:this={sectionElement}
	id="founders"
	class="bg-gradient-to-b from-white to-coffee-cream py-16 md:py-24 dark:from-gray-800 dark:to-gray-900"
>
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center md:mb-16">
			<h2 class="section-title">Para Dalang Kami</h2>
			<div class="mx-auto mb-6 h-1 w-24 bg-coffee-caramel"></div>
			<p class="mx-auto max-w-2xl text-gray-700 dark:text-gray-300">
				Kenali para pendiri yang menghadirkan cerita dalam setiap cangkir kopi
			</p>
		</div>

		<div class="mx-auto max-w-7xl">
			<!-- Founders Grid -->
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
				{#each founders as founder, index (founder.id)}
					<div
						class="founder-card {visibleCards[index] ? 'visible' : ''} {index % 2 === 0
							? 'slide-from-left'
							: 'slide-from-right'}"
					>
						<!-- Card Container -->
						<div class="group relative">
							<!-- Decorative Circle Background -->
							<div
								class="absolute -inset-4 rounded-full bg-gradient-to-br from-coffee-light to-coffee-caramel opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30"
							></div>

							<!-- Main Card -->
							<div
								class="relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl dark:bg-gray-800"
							>
								<!-- Image Container -->
								<div
									class="relative flex h-80 items-end justify-center overflow-hidden bg-gradient-to-br from-coffee-cream to-coffee-light dark:from-gray-700 dark:to-gray-600"
								>
									<!-- Circular Image Frame -->
									<div
										class="absolute top-8 h-56 w-56 overflow-hidden rounded-full border-8 border-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 dark:border-gray-800"
									>
										<img
											src={founder.image}
											alt={founder.name}
											class="h-full w-full object-cover"
											on:error={(e) => {
												// Fallback jika gambar tidak ditemukan
												e.currentTarget.style.display = 'none';
												e.currentTarget.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-coffee-medium to-coffee-dark flex items-center justify-center text-white text-6xl font-bold">
                            ${founder.name.charAt(0)}
                          </div>
                        `;
											}}
										/>
									</div>

									<!-- Decorative Wayang Pattern -->
									<div class="pointer-events-none absolute inset-0 opacity-5">
										<div class="absolute inset-0 flex items-center justify-center text-9xl">🎭</div>
									</div>
								</div>

								<!-- Content -->
								<div class="p-6 text-center">
									<h3
										style="font-family: var(--font-family-display)"
										class="mb-2 text-2xl font-bold text-coffee-dark dark:text-coffee-light"
									>
										{founder.name}
									</h3>

									<div
										class="mb-4 inline-block rounded-full bg-coffee-caramel/20 px-4 py-1 dark:bg-coffee-caramel/30"
									>
										<p class="text-sm font-semibold text-coffee-dark dark:text-coffee-light">
											{founder.role}
										</p>
									</div>

									<p class="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
										{founder.description}
									</p>

									<!-- Social Links -->
									<div class="flex justify-center gap-3">
										{#if founder.social.instagram}
											<a
												href={founder.social.instagram}
												class="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-cream text-coffee-dark transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-coffee-light dark:bg-gray-700 dark:text-coffee-light dark:hover:bg-gray-600"
												aria-label="Instagram"
											>
												<span class="text-lg">📸</span>
											</a>
										{/if}
										{#if founder.social.linkedin}
											<a
												href={founder.social.linkedin}
												class="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-cream text-coffee-dark transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-coffee-light dark:bg-gray-700 dark:text-coffee-light dark:hover:bg-gray-600"
												aria-label="LinkedIn"
											>
												<span class="text-lg">💼</span>
											</a>
										{/if}
										{#if founder.social.email}
											<a
												href="mailto:{founder.social.email}"
												class="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-cream text-coffee-dark transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-coffee-light dark:bg-gray-700 dark:text-coffee-light dark:hover:bg-gray-600"
												aria-label="Email"
											>
												<span class="text-lg">✉️</span>
											</a>
										{/if}
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Quote Section -->
			<div class="mt-16 text-center md:mt-20">
				<div
					class="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-coffee-dark to-coffee-medium p-8 shadow-2xl md:p-12"
				>
					<span class="mb-4 block text-5xl">💭</span>
					<blockquote
						style="font-family: var(--font-family-display)"
						class="mb-4 text-xl leading-relaxed font-semibold text-white italic md:text-2xl"
					>
						"Setiap cangkir kopi adalah sebuah cerita, setiap cerita adalah sebuah kenangan."
					</blockquote>
					<p class="font-medium text-white/90">- Tim Rumah Si Dalang</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.founder-card {
		opacity: 0;
		transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.founder-card.slide-from-left {
		transform: translateX(-100px);
	}

	.founder-card.slide-from-right {
		transform: translateX(100px);
	}

	.founder-card.visible {
		opacity: 1;
		transform: translateX(0);
	}

	/* Mobile: semua dari kiri */
	@media (max-width: 768px) {
		.founder-card.slide-from-right {
			transform: translateX(-100px);
		}
	}
</style>
