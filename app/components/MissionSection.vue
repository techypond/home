<template>
  <!-- About section -->
  <section id="about" class="py-24 bg-navy-800/40">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">What is Techy Pond?</h2>
        <p class="text-gray-400 max-w-2xl mx-auto text-lg">
          We are a small, passionate startup building digital tools that make a real difference.
          From sleek web apps to data platforms, everything we ship is for the people.
        </p>
      </div>
    </div>
  </section>

  <!-- Mission section -->
  <section id="mission" class="py-24 bg-navy-900">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-pond-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Mission</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Three pillars we stand on</h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Every project we build revolves around these core values.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="card in cards"
          :key="card.title"
          class="group rounded-2xl border border-white/10 bg-navy-800/60 p-8 hover:border-pond-500/40 hover:bg-navy-800 transition-all duration-300"
        >
          <div class="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-pond-500/10 text-3xl group-hover:scale-110 transition-transform">
            {{ card.icon }}
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">{{ card.title }}</h3>
          <p class="text-gray-400 leading-relaxed text-sm">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    icon: '🛠️',
    title: 'Build Websites & Apps',
    description:
      'We design and develop full-stack web applications and websites — from interactive dashboards and data visualizations to productivity tools — with a focus on usability and performance.',
  },
  {
    icon: '🔭',
    title: 'Explore New Technologies',
    description:
      'We love pushing boundaries. Each project is an opportunity to experiment with emerging tech: new frameworks, infrastructure patterns, data stores, and dev tooling.',
  },
  {
    icon: '🤝',
    title: 'Help the Community',
    description:
      'Open-source at heart. We believe technology should empower people. Our tools are built to be accessible, useful, and free for everyone to explore and contribute to.',
  },
]
</script>
