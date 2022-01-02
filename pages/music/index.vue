<template>
  <div>
    <ResourceLink v-for="(track, index) in tracks" :key="index" :resource="track" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    let tracks = await $content('tracks', params.slug)
      .only(['title', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    tracks = tracks.map(track => ({
      title: track.title,
      year: new Date(track.createdAt).toLocaleDateString('en', { year: 'numeric' }),
      link: `music/${track.slug}`
    }))

    return { tracks }
  },
  head () {
    return {
      title: 'Music | Shadow Smith'
    }
  }
}
</script>
