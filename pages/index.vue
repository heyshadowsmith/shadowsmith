<template>
  <div>
    <NuxtLink v-for="(article, index) in articles" :key="index" :to="`/${article.slug}`" class="flex items-end py-4 border-t border-b border-transparent hover:border-gray-200">
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
