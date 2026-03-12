<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-white/10">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <!-- Brand -->
      <a href="#hero" class="flex items-center gap-2 group">
        <span class="text-2xl">🐸</span>
        <span class="text-lg font-semibold text-white group-hover:text-pond-400 transition-colors">
          Techy Pond
        </span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm text-gray-400 hover:text-pond-400 transition-colors font-medium"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Mobile menu toggle -->
      <button
        class="md:hidden text-gray-400 hover:text-white transition-colors"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="mobileOpen" class="md:hidden bg-navy-800 border-t border-white/10">
      <div class="px-6 py-4 flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm text-gray-300 hover:text-pond-400 transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Projects', href: '#projects' },
]
</script>
