<template>
  <div>
    <NuxtLink v-for="(track, index) in tracks" :key="index" :to="`music/${track.slug}`" class="track-link flex flex-col-reverse items-start py-2 sm:flex-row sm:items-end sm:py-3 border-t border-b border-transparent hover:border-gray-200">
      <span class="font-mono text-gray-500 text-sm mr-6">{{ formatDate(track.createdAt) }} </span><span class="font-medium text-gray-900">
        {{ track.title }}
      </span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const tracks = await $content('tracks', params.slug)
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { tracks }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric' }

      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head () {
    return {
      title: 'Music | Shadow Smith'
    }
  }
}
</script>

<style>
.track-link {
  transition: all 0.25s ease;
}
</style>
