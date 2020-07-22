<template>
  <div>
    <NuxtLink v-for="(article, index) in articles" :key="index" :to="`/${article.slug}`" class="flex flex-col-reverse items-start py-2 sm:flex-row sm:items-end sm:py-3 border-t border-b border-transparent hover:border-gray-200">
      <span class="font-mono text-gray-500 text-sm mr-6">{{ formatDate(article.createdAt) }} </span><span class="font-medium text-gray-900">
        {{ article.title }}
      </span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric' }

      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
