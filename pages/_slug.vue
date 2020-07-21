<template>
  <article>
    <div class="mb-6">
      <h1 class="mb-0">
        {{ article.title }}
      </h1>
      <p class="font-mono text-gray-500 text-sm">
        <a href="https://twitter.com/heyshadowsmith">heyshadowsmith</a> / {{ formatDate(article.createdAt) }}
      </p>
    </div>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }

      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style>
.nuxt-content-highlight {
  @apply mb-4;
}

p code, li code {
  @apply bg-chalkboard;
  @apply rounded;
  @apply text-white;
  padding: 2px 4px;
}
</style>
