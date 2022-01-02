<template>
  <div>
    <ResourceLink v-for="(win, index) in wins" :key="index" :resource="win" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    let wins = await $content('wins', params.slug)
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    wins = wins.map(win => ({
      title: win.title,
      year: new Date(win.createdAt).toLocaleDateString('en', { year: 'numeric' }),
      link: `wins/${win.slug}`
    }))

    return { wins }
  },
  head () {
    return {
      title: 'Wins | Shadow Smith'
    }
  }
}
</script>
