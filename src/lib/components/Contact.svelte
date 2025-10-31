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

<section id="contact" class="py-16 md:py-24 bg-cream dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="font-display text-3xl md:text-4xl font-bold text-coffee mb-4">Hubungi Kami</h2>
      <div class="w-24 h-1 bg-latte mx-auto mb-6"></div>
      <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Kami siap melayani Anda. Jangan ragu untuk menghubungi kami!
      </p>
    </div>
    
    <div class="max-w-6xl mx-auto">
      <!-- Contact Info Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {#each contactInfo as info}
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300">
            <div class="text-4xl mb-4">{info.icon}</div>
            <h3 class="font-bold text-lg text-coffee mb-2">{info.title}</h3>
            <p class="text-gray-700 dark:text-gray-300 font-medium mb-1">{info.content}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">{info.subContent}</p>
          </div>
        {/each}
      </div>
      
      <!-- Map Section -->
      <div class="rounded-xl overflow-hidden mb-12 shadow-md">
        <div class="aspect-video bg-gradient-to-br from-latte to-coffee flex items-center justify-center">
          <div class="text-center">
            <span class="text-8xl block mb-4">🗺️</span>
            <p class="text-white text-xl font-bold">Lokasi Kami</p>
            <p class="text-white/80">Klik untuk membuka Google Maps</p>
          </div>
        </div>
      </div>
      
      <!-- Social Media -->
      <div class="text-center mb-16">
        <h3 class="font-display text-2xl md:text-3xl font-bold text-coffee mb-6">
          Ikuti Media Sosial Kami
        </h3>
        <div class="flex flex-wrap justify-center gap-4">
          {#each socialMedia as social}
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-latte dark:hover:bg-gray-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span class="text-2xl">{social.icon}</span>
              <span class="font-medium text-coffee dark:text-white">{social.name}</span>
            </a>
          {/each}
        </div>
      </div>
      
      <!-- Newsletter -->
      <div class="mt-16 bg-coffee dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-lg">
        <span class="text-5xl mb-4 block">📬</span>
        <h3 class="font-display text-2xl md:text-3xl font-bold text-white mb-4">
          Dapatkan Promo Spesial
        </h3>
        <p class="text-white/80 mb-6 max-w-xl mx-auto">
          Daftarkan email Anda untuk mendapatkan info promo dan menu terbaru dari kami
        </p>
        <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Anda"
            class="flex-1 px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-latte"
          />
          <button class="bg-latte hover:bg-coffee text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg whitespace-nowrap">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-coffee text-white py-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="text-3xl">🎭</span>
        <div>
          <h3 class="font-display text-xl font-bold">Rumah Si Dalang</h3>
          <p class="text-sm text-white/70">Coffee & Eatery</p>
        </div>
      </div>
      
      <div class="text-center md:text-right">
        <p class="text-white/70 text-sm">
          © 2025 Rumah Si Dalang. Seluruh hak cipta dilindungi.
        </p>
        <p class="text-white/50 text-xs mt-1">
          Dibuat dengan ❤️ dan ☕ di Indonesia
        </p>
      </div>
    </div>
  </div>
</footer>
