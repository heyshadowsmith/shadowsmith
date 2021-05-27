<template>
  <div>
    <NuxtLink v-for="(win, index) in wins" :key="index" :to="`wins/${win.slug}`" class="win-link flex flex-col-reverse items-start py-2 sm:flex-row sm:items-end sm:py-3 border-t border-b border-transparent hover:border-gray-200">
      <span class="font-mono text-gray-500 text-sm mr-6">{{ formatDate(win.createdAt) }} </span><span class="font-medium text-gray-900">
        {{ win.title }}
      </span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const wins = await $content('wins', params.slug)
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { wins }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric' }

      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head () {
    return {
      title: 'Wins | Shadow Smith'
    }
  }
}
</script>

<style>
.win-link {
  transition: all 0.25s ease;
}
</style>
