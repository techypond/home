<template>
  <section id="projects" class="py-24 bg-navy-800/40">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <span class="text-pond-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Work</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Current Projects</h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Deployed apps and platforms built at Techy Pond. Browse or search to explore what we've shipped.
        </p>
      </div>

      <!-- Search -->
      <div class="mb-8 max-w-md mx-auto">
        <div class="relative">
          <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            v-model="search"
            type="text"
            placeholder="Search projects..."
            class="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-700/60 border border-white/10 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-pond-500/60 focus:ring-1 focus:ring-pond-500/40 transition-colors text-sm"
          />
        </div>
      </div>

      <!-- Table -->
      <div class="rounded-2xl border border-white/10 overflow-hidden">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-navy-700/60 border-b border-white/10">
              <th class="text-left px-6 py-4 font-semibold text-gray-300 uppercase tracking-wider text-xs">Project</th>
              <th class="text-left px-6 py-4 font-semibold text-gray-300 uppercase tracking-wider text-xs hidden md:table-cell">Description</th>
              <th class="text-left px-6 py-4 font-semibold text-gray-300 uppercase tracking-wider text-xs hidden lg:table-cell">Tech</th>
              <th class="text-center px-6 py-4 font-semibold text-gray-300 uppercase tracking-wider text-xs">Status</th>
              <th class="text-right px-6 py-4 font-semibold text-gray-300 uppercase tracking-wider text-xs">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(project, i) in filtered"
              :key="project.name"
              :class="[
                'border-b border-white/5 hover:bg-navy-700/30 transition-colors',
                i % 2 === 0 ? 'bg-navy-800/20' : 'bg-transparent',
              ]"
            >
              <td class="px-6 py-5">
                <span class="font-semibold text-white">{{ project.name }}</span>
              </td>
              <td class="px-6 py-5 text-gray-400 hidden md:table-cell max-w-xs">
                <span class="line-clamp-2">{{ project.description }}</span>
              </td>
              <td class="px-6 py-5 hidden lg:table-cell">
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in project.tech"
                    :key="tag"
                    class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-pond-500/10 text-pond-400 border border-pond-500/20"
                  >
                    {{ tag }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-5 text-center">
                <span
                  :class="statusClass(project.status)"
                  class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                >
                  <span class="w-1.5 h-1.5 rounded-full" :class="dotClass(project.status)" />
                  {{ project.status }}
                </span>
              </td>
              <td class="px-6 py-5 text-right">
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-pond-400 hover:text-pond-300 font-medium transition-colors"
                >
                  Visit
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr v-if="filtered.length === 0">
              <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                No projects match "<span class="text-gray-400">{{ search }}</span>".
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="mt-6 text-center text-xs text-gray-600">
        {{ filtered.length }} of {{ projects.length }} projects shown
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'

const search = ref('')

const filtered = computed(() => {
  const q = search.value.toLowerCase().trim()
  if (!q) return projects
  return projects.filter((p) =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tech.some((t) => t.toLowerCase().includes(q))
  )
})

function statusClass(status: string) {
  if (status === 'Live') return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
  if (status === 'Beta') return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
  return 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
}

function dotClass(status: string) {
  if (status === 'Live') return 'bg-emerald-400 animate-pulse'
  if (status === 'Beta') return 'bg-yellow-400'
  return 'bg-gray-400'
}
</script>
