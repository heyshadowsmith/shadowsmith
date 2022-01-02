<template>
  <ResourcePage :resource="track" />
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const track = await $content('tracks', params.slug).fetch()

    return { track }
  },
  head () {
    return {
      title: `${this.track.title} | Shadow Smith`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.track.title} - a song by Shadow Smith`
        }
      ]
    }
  }
}
</script>
