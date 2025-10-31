<script lang="ts">
  import { menuItems, categories, type MenuItem } from '$lib/data/menu';
  
  let selectedCategory = 'all';
  
  $: filteredMenu = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };
</script>

<section id="menu" class="py-16 md:py-24 bg-coffee-cream dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="section-title">Menu Kami</h2>
      <div class="w-24 h-1 bg-coffee-caramel mx-auto mb-6"></div>
      <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Koleksi minuman dan makanan pilihan yang dibuat dengan penuh cinta dan dedikasi
      </p>
    </div>
    
    <!-- Category Filter -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      {#each categories as category}
        <button
          on:click={() => selectedCategory = category.id}
          class="px-6 py-2 rounded-full font-medium transition-all duration-300 {selectedCategory === category.id 
            ? 'bg-coffee-dark text-white shadow-lg scale-105' 
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-coffee-light dark:hover:bg-gray-700'}"
        >
          {category.name}
        </button>
      {/each}
    </div>
    
    <!-- Menu Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {#each filteredMenu as item (item.id)}
        <div class="card group">
          <!-- Image -->
          <div class="relative bg-gradient-to-br from-coffee-light to-coffee-medium h-48 flex items-center justify-center overflow-hidden">
            <span class="text-7xl group-hover:scale-110 transition-transform duration-300">{item.image}</span>
            {#if item.popular}
              <div class="absolute top-3 right-3 bg-coffee-caramel text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Populer
              </div>
            {/if}
          </div>
          
          <!-- Content -->
          <div class="p-5">
            <h3 class="font-bold text-lg text-coffee-dark dark:text-coffee-light mb-2 line-clamp-1">
              {item.name}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {item.description}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-coffee-caramel">
                {formatPrice(item.price)}
              </span>
              <button class="bg-coffee-dark hover:bg-coffee-medium text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg">
                Pesan
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    {#if filteredMenu.length === 0}
      <div class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">Tidak ada menu di kategori ini</p>
      </div>
    {/if}
  </div>
</section>