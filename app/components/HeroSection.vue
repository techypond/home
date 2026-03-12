<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
  >
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
    <!-- Subtle radial glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12)_0%,transparent_70%)]" />
    <!-- Grid overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <div class="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pond-500/40 bg-pond-500/10 text-pond-400 text-sm font-medium">
        <span class="w-2 h-2 rounded-full bg-pond-400 animate-pulse" />
        Building solutions for the people
      </div>

      <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
        Welcome to the
        <span class="bg-gradient-to-r from-pond-400 to-sky-300 bg-clip-text text-transparent">
          Techy Pond
        </span>
      </h1>

      <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        A startup focused on creating websites, applications, and solutions
        while exploring new technologies and helping the community.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-pond-500 hover:bg-pond-600 text-white font-semibold transition-colors shadow-lg shadow-pond-500/25"
        >
          See Our Projects
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <a
          href="#about"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 hover:border-pond-500/60 text-gray-300 hover:text-white font-semibold transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 animate-bounce">
      <span class="text-xs uppercase tracking-widest">scroll</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>
