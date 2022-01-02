<template>
  <ResourcePage :resource="win" />
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const win = await $content('wins', params.slug).fetch()

    return { win }
  },
  head () {
    return {
      title: `${this.win.title} | Shadow Smith`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.win.description
        }
      ]
    }
  }
}
</script>
