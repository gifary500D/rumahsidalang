<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

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
			name: 'Nau',
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
			name: 'Naufal Nafriwan',
			role: 'Co-Founder & Head Barista',
			description:
				'Juara kompetisi barista nasional. Menghadirkan inovasi dalam setiap cangkir kopi dengan sentuhan seni dan tradisi.',
			image: '/founder2.jpg',
			social: {
				instagram: '#',
				linkedin: '#',
				email: 'Naufal@rumahsidalang.com'
			}
		},
		{
			id: 3,
			name: '',
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
		if (!browser) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Animate cards one by one with delay
						founders.forEach((_, index) => {
							setTimeout(() => {
								visibleCards[index] = true;
							}, index * 150);
						});
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
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

	function handleImageError(event: Event, founderName: string) {
		const target = event.currentTarget as HTMLImageElement;
		const parent = target.parentElement;
		if (parent) {
			parent.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-coffee-medium to-coffee-dark flex items-center justify-center text-white text-5xl md:text-6xl font-bold">
          ${founderName.charAt(0)}
        </div>
      `;
		}
	}
</script>

<section
	bind:this={sectionElement}
	id="founders"
	class="overflow-hidden bg-gradient-to-b from-white to-coffee-cream py-12 md:py-16 lg:py-24 dark:from-gray-800 dark:to-gray-900"
>
	<div class="container mx-auto px-4">
		<div class="mb-8 text-center md:mb-12 lg:mb-16">
			<h2 class="section-title">Para Dalang Kami</h2>
			<div class="mx-auto mb-4 h-1 w-24 bg-coffee-caramel md:mb-6"></div>
			<p class="mx-auto max-w-2xl px-4 text-sm text-gray-700 md:text-base dark:text-gray-300">
				Kenali para pendiri yang menghadirkan cerita dalam setiap cangkir kopi
			</p>
		</div>

		<div class="mx-auto max-w-7xl">
			<!-- Founders Grid -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
				{#each founders as founder, index (founder.id)}
					<div
						class="founder-card {visibleCards[index] ? 'visible' : ''} {index % 2 === 0
							? 'slide-from-left'
							: 'slide-from-right'}"
					>
						<!-- Card Container -->
						<div class="group relative h-full">
							<!-- Decorative Circle Background -->
							<div
								class="absolute -inset-2 rounded-full bg-gradient-to-br from-coffee-light to-coffee-caramel opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30 md:-inset-4"
							></div>

							<!-- Main Card -->
							<div
								class="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl md:rounded-3xl dark:bg-gray-800"
							>
								<!-- Image Container -->
								<div
									class="relative flex h-64 items-end justify-center overflow-hidden bg-gradient-to-br from-coffee-cream to-coffee-light md:h-72 lg:h-80 dark:from-gray-700 dark:to-gray-600"
								>
									<!-- Circular Image Frame -->
									<div
										class="absolute top-6 h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 md:top-8 md:h-52 md:w-52 md:border-8 lg:h-56 lg:w-56 dark:border-gray-800"
									>
										<img
											src={founder.image}
											alt={founder.name}
											class="h-full w-full object-cover"
											on:error={(e) => handleImageError(e, founder.name)}
										/>
									</div>

									<!-- Decorative Wayang Pattern -->
									<div class="pointer-events-none absolute inset-0 opacity-5">
										<div
											class="absolute inset-0 flex items-center justify-center text-7xl md:text-9xl"
										>
											🎭
										</div>
									</div>
								</div>

								<!-- Content -->
								<div class="flex flex-1 flex-col p-4 text-center md:p-6">
									<h3
										style="font-family: var(--font-family-display)"
										class="mb-2 text-xl font-bold text-coffee-dark md:text-2xl dark:text-coffee-light"
									>
										{founder.name}
									</h3>

									<div
										class="mx-auto mb-3 inline-block rounded-full bg-coffee-caramel/20 px-3 py-1 md:mb-4 md:px-4 dark:bg-coffee-caramel/30"
									>
										<p
											class="text-xs font-semibold text-coffee-dark md:text-sm dark:text-coffee-light"
										>
											{founder.role}
										</p>
									</div>

									<p
										class="mb-4 flex-1 text-xs leading-relaxed text-gray-600 md:mb-6 md:text-sm dark:text-gray-400"
									>
										{founder.description}
									</p>

									<!-- Social Links -->
									<div class="flex justify-center gap-2 md:gap-3">
										{#if founder.social.instagram}
											<a
												href={founder.social.instagram}
												class="flex h-9 w-9 items-center justify-center rounded-full bg-coffee-cream text-coffee-dark transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-coffee-light md:h-10 md:w-10 dark:bg-gray-700 dark:text-coffee-light dark:hover:bg-gray-600"
												aria-label="Instagram"
											>
												<span class="text-base md:text-lg">📸</span>
											</a>
										{/if}
										{#if founder.social.linkedin}
											<a
												href={founder.social.linkedin}
												class="flex h-9 w-9 items-center justify-center rounded-full bg-coffee-cream text-coffee-dark transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-coffee-light md:h-10 md:w-10 dark:bg-gray-700 dark:text-coffee-light dark:hover:bg-gray-600"
												aria-label="LinkedIn"
											>
												<span class="text-base md:text-lg">💼</span>
											</a>
										{/if}
										{#if founder.social.email}
											<a
												href="mailto:{founder.social.email}"
												class="flex h-9 w-9 items-center justify-center rounded-full bg-coffee-cream text-coffee-dark transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-coffee-light md:h-10 md:w-10 dark:bg-gray-700 dark:text-coffee-light dark:hover:bg-gray-600"
												aria-label="Email"
											>
												<span class="text-base md:text-lg">✉️</span>
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
			<div class="mt-12 px-4 text-center md:mt-16 lg:mt-20">
				<div
					class="mx-auto max-w-3xl rounded-xl bg-gradient-to-br from-coffee-dark to-coffee-medium p-6 shadow-2xl md:rounded-2xl md:p-8 lg:p-12"
				>
					<span class="mb-3 block text-4xl md:mb-4 md:text-5xl">💭</span>
					<blockquote
						style="font-family: var(--font-family-display)"
						class="mb-3 text-lg leading-relaxed font-semibold text-white italic md:mb-4 md:text-xl lg:text-2xl"
					>
						"Setiap cangkir kopi adalah sebuah cerita, setiap cerita adalah sebuah kenangan."
					</blockquote>
					<p class="text-sm font-medium text-white/90 md:text-base">- Tim Rumah Si Dalang</p>
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
		transform: translateX(-50px);
	}

	.founder-card.slide-from-right {
		transform: translateX(50px);
	}

	.founder-card.visible {
		opacity: 1;
		transform: translateX(0);
	}

	/* Mobile: semua dari kiri dengan jarak lebih pendek */
	@media (max-width: 768px) {
		.founder-card.slide-from-left,
		.founder-card.slide-from-right {
			transform: translateX(-30px);
		}

		.founder-card.visible {
			transform: translateX(0);
		}
	}
</style>
