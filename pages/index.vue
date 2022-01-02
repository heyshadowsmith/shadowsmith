<template>
  <div>
    <ResourceLink v-for="(article, index) in articles" :key="index" :resource="article" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    let articles = await $content('articles', params.slug)
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    articles = articles.map(article => ({
      title: article.title,
      year: new Date(article.createdAt).toLocaleDateString('en', { year: 'numeric' }),
      link: `/${article.slug}`
    }))

    return { articles }
  },
  head () {
    return {
      title: 'Articles | Shadow Smith'
    }
  }
}
</script>
