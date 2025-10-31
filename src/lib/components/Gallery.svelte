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

<section id="gallery" class="py-16 md:py-24 bg-white dark:bg-gray-800">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="section-title">Galeri Kami</h2>
      <div class="w-24 h-1 bg-coffee-caramel mx-auto mb-6"></div>
      <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Intip suasana dan ragam menu yang kami tawarkan
      </p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
      {#each galleryItems as item (item.id)}
        <div class="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br {item.color} flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
            <span class="text-6xl md:text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.emoji}
            </span>
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
              <h3 class="text-white font-bold text-lg md:text-xl">{item.title}</h3>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Instagram Section -->
    <div class="mt-16 text-center">
      <div class="inline-block bg-coffee-cream dark:bg-gray-700 rounded-2xl p-8 md:p-12">
        <span class="text-5xl mb-4 block">📸</span>
        <h3 class="font-display text-2xl md:text-3xl font-bold text-coffee-dark dark:text-coffee-light mb-4">
          Ikuti Kami di Instagram
        </h3>
        <p class="text-gray-700 dark:text-gray-300 mb-6">
          Tag kami di foto Anda untuk berkesempatan ditampilkan!
        </p>
        <a 
          href="https://instagram.com/rumahsidalang" 
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary inline-block"
        >
          @rumahsidalang
        </a>
      </div>
    </div>
  </div>
</section>